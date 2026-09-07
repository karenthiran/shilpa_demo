'use client'
import Link from 'next/link';
import Image from "next/image";
import { useState, useEffect } from 'react';
import { MoonLoader } from 'react-spinners';

const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blog');
      if (!res.ok) throw new Error('Failed to fetch blogs');
      const data = await res.json();
      setBlogs(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return <div className='my-5 py-5 text-center d-flex justify-content-center'><MoonLoader/></div>
  }

  const cleanDescription = (html, wordLimit = 54) => {
    if (!html) return "";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    const words = text.trim().split(/\s+/);
    if (words.length > wordLimit) {
      const truncatedText = words.slice(0, wordLimit).join(" ") + " ...";
      return `<p>${truncatedText}</p>`;
    }
    return tempDiv.innerHTML;
  };

  // ✅ Pagination Logic
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="blogs-section">
      <div className="container">
        <div className="row justify-content-center">
          {currentBlogs?.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="single-blog-box border rounded ">
                <div className="blog-thumb p-2">
                  <Image src={item.thumbnail} alt={item.heading} width={379} height={280} />
                </div>
                <div className="blog-content ">
                  <h2 className="blog-title ">
                    <Link href={`/blog/${item?.slug?.trim().replace(/\s+/g, "-")}`}>
                      {item.heading.length > 50 ? item.heading.slice(0, 40) + '...' : item.heading}
                    </Link>
                  </h2>
                  <p
                    className="blog-desc"
                    dangerouslySetInnerHTML={{ __html: cleanDescription(item.description, 40) }}
                  ></p>
                  <div className="blog-btn">
                    <Link
                      href={`/blog/${item?.slug?.trim().replace(/\s+/g, "-")}`}
                      className="text-[#FFFEF5] rounded-lg text-base bg-[#000000] px-[8.95rem] py-2 text-center block text-nowrap"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Pagination Buttons */}
      {/* ✅ Custom Pagination Buttons (No Bootstrap) */}
{totalPages > 1 && (
  <div className="d-flex justify-content-center mt-10 space-x-2">
    {/* Prev Button */}
    <button
      onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
      className={`px-4 py-2 border rounded-md ${
        currentPage === 1
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-white text-black hover:bg-black hover:text-white transition'
      }`}
      disabled={currentPage === 1}
    >
      Prev
    </button>

    {/* Page Numbers */}
    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        onClick={() => handlePageChange(index + 1)}
        className={`px-4 py-2 border rounded-md transition ${
          currentPage === index + 1
            ? 'bg-black text-white'
            : 'bg-white text-black hover:bg-black hover:text-white'
        }`}
      >
        {index + 1}
      </button>
    ))}

    {/* Next Button */}
    <button
      onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
      className={`px-4 py-2 border rounded-md ${
        currentPage === totalPages
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-white text-black hover:bg-black hover:text-white transition'
      }`}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
)}

      </div>
    </div>
  );
};

export default BlogGrid;
