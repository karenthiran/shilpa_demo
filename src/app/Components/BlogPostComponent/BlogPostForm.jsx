"use client";
import { useEffect, useState, useRef } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { FilterMatchMode } from 'primereact/api';
import { Toast } from 'primereact/toast';
import { AiFillFolderOpen } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { ImCloudUpload } from "react-icons/im";
import Image from "next/image";
import { Editor } from "../JoditEditor/JoditEditor";

const BlogPostForm = () => {
  // State Management
  const [blogs, setBlogs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    heading: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
    description: "",
    thumbnail: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const toast = useRef(null);

  const [thumbnail, setThumbnail] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageShow, setImageShow] = useState(null);

  useEffect(() => {
    if (blogs.length > 0) {
      setThumbnail(blogs.thumbnail);
    }
  }, [blogs]);

  const handleImageChange = async (e) => {
    setLoading(true);
    const imageData = e?.target?.files[0];
    if (!imageData) {
      setLoading(false);
      return;
    }

    try {
      // Create FormData
      const formData = new FormData();
      formData.append('file', imageData);

      // Upload via your API (no CORS issues!)
      const response = await fetch('/api/s3-upload-url', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      console.log("Upload Image URL:", data.url);
      setThumbnail(data.url);
      setImageShow(data.url);
      setLoading(false);

    } catch (error) {
      console.error("Upload error:", error);
      alert(`Upload failed: ${error.message}`);
      setLoading(false);
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blog");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      showToast('error', 'Error', 'Failed to fetch blogs');
    }
  };

  useEffect(() => { fetchBlogs(); }, []);

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail, life: 3000 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `/api/blog/${encodeURIComponent(formData.heading)}`
      : `/api/blog`;
    formData.thumbnail = thumbnail;
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to save blog");
      }

      showToast('success', 'Success', editingId ? 'Blog updated successfully' : 'Blog created successfully');
      setModalOpen(false);
      setFormData({ heading: "", description: "", thumbnail: "" });
      setEditingId(null);
      fetchBlogs();
    } catch (err) {
      console.error("Submission error:", err);
      showToast('error', 'Error', err.message);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleDelete = async (blog) => {
    try {
      const res = await fetch(`/api/blog/${encodeURIComponent(blog.heading)}`, { method: "DELETE" });
      if (!res.ok) throw new Error('Failed to delete blog');
      showToast('success', 'Success', 'Blog deleted successfully');
      fetchBlogs();
    } catch (err) { showToast('error', 'Error', err.message); }
  };

  const handleEdit = (blog) => {
    setFormData(blog);
    setEditingId(blog.heading);
    setModalOpen(true);
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    setFilters({ global: { value, matchMode: FilterMatchMode.CONTAINS } });
    setGlobalFilterValue(value);
  };

  const renderHeader = () => (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h2 className="h4 fw-bold">Blog Posts</h2>
      <div className="input-group" style={{ maxWidth: '250px' }}>
        <span className="input-group-text"><i className="pi pi-search"></i></span>
        <InputText
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Search..."
          className="form-control"
        />
      </div>
    </div>
  );

  const thumbnailBodyTemplate = (rowData) => (
    <Image
      src={rowData.thumbnail || 'https://placehold.co/100x60'}
      alt="thumbnail"
      className="img-fluid rounded"
      style={{ width: '80px', height: '60px', objectFit: 'cover' }}
    />
  );

  const descriptionBodyTemplate = (rowData) => (
    <div className="text-truncate text-clamp-2" style={{ maxWidth: '250px' }}
      dangerouslySetInnerHTML={{ __html: rowData.description }}
    />
  );

  const actionBodyTemplate = (rowData) => (
    <div className="d-flex gap-2">
      <Button
        icon="pi pi-pencil"
        className="p-button-rounded p-button-success p-button-text"
        onClick={() => handleEdit(rowData)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-danger p-button-text"
        onClick={() => handleDelete(rowData)}
      />
    </div>
  );

  return (
    <div className=" py-4 ">
      <Toast ref={toast} position="top-right" />

      <div className="card p-3">
        <DataTable
          value={blogs}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: '50rem' }}
          filters={filters}
          filterDisplay="menu"
          globalFilterFields={['heading']}
          header={renderHeader()}
          emptyMessage="No blog posts found."
        >
          <Column field="heading" header="Title" sortable />
          <Column field="thumbnail" header="Thumbnail" body={thumbnailBodyTemplate} />
          <Column field="description" header="Content" body={descriptionBodyTemplate} />
          <Column body={actionBodyTemplate} header="Actions" style={{ width: '8rem' }} />
        </DataTable>
      </div>

      {/* Floating Add Button */}
      <Button
        icon="pi pi-plus"
        className="p-button-rounded rounded-5 p-button-raised position-fixed "
        style={{ width: '50px', height: '50px' }}
        onClick={() => { setFormData({ heading: "", description: "", thumbnail: "" }); setEditingId(null); setModalOpen(true); }}
      />

      {/* Blog Form Dialog */}
      <Dialog
        visible={modalOpen}
        onHide={() => { setModalOpen(false); setEditingId(null); setFormData({ heading: "", description: "", thumbnail: "" }); }}
        style={{ width: '50vw' }}
        header={editingId ? "Edit Blog Post" : "Add Blog Post"}
        modal
        className="p-fluid"
        breakpoints={{ '960px': '75vw', '641px': '90vw' }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="heading" className="form-label fw-medium text-black">Title *</label>
            <InputText
              id="heading"
              placeholder="Enter Slug.."
              value={formData.heading}
              onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-medium text-black">Slug *</label>
            <InputText
              placeholder="Enter Slug.."
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-medium text-black">Meta Title *</label>
            <InputText
              placeholder="Enter Meta Title.."
              value={formData.metaTitle}
              onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-medium text-black">Meta Description *</label>
            <InputText
              placeholder="Enter Meta Description.."
              value={formData.metaDescription}
              onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-medium text-black">Content *</label>
            <Editor content={formData} setContent={setFormData} />
          </div>

          {/* Thumbnail Upload */}
          <div className="border border-dashed rounded d-flex justify-content-center align-items-center mb-3" style={{ height: '15rem', position: 'relative' }}>
            {!imageShow && !loading && (
              <>
                <label htmlFor="avatar_Image" className="w-100 h-100 d-flex flex-column justify-content-center align-items-center cursor-pointer">
                  <AiFillFolderOpen className="fs-2 text-secondary" />
                  <p className="text-secondary mt-2">Upload Image</p>
                </label>
                <input type="file" id="avatar_Image" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
              </>
            )}
            {imageShow && !loading && (
              <>
                <label htmlFor="avatar_Image" className="position-absolute top-0 end-0 bg-primary text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '2.5rem', height: '2.5rem', cursor: 'pointer' }}>
                  <TfiReload />
                </label>
                <input type="file" id="avatar_Image" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
                <Image src={imageShow} width={100} height={100} alt="Preview" className="img-fluid rounded" style={{ maxHeight: '100%', objectFit: 'cover' }} />
              </>
            )}
            {loading && !imageShow && (
              <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100 text-secondary">
                <ImCloudUpload className="fs-2" />
                <p className="mt-2">Uploading...</p>
              </div>
            )}
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="d-flex justify-content-end gap-2">
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={() => { setModalOpen(false); setEditingId(null); setFormData({ heading: "", description: "", thumbnail: "" }); }} />
            <Button label={isSubmitting ? "Saving..." : "Save"} icon="pi pi-check" type="submit" loading={isSubmitting} />
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default BlogPostForm;
