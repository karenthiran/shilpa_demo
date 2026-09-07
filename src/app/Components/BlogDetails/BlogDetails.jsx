'use client'
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

const BlogDetails = () => {
	const { slug } = useParams();
	const decodedSlug = decodeURIComponent(slug);

	const [blog, setBlog] = useState(null);
	const [blogs, setBlogs] = useState([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);


	const fetchBlog = async () => {
		try {
			const OriginalHeading = decodedSlug.replace(/-/g, " ");
			const res = await fetch(`/api/blog/${OriginalHeading}`);
			if (!res.ok) throw new Error('Failed to fetch blog');
			const data = await res.json();

			setBlog(data);
			setLoading(false);

		} catch (err) {
			setError(err.message);
			setLoading(false);
		}
	};
	const fetchBlogs = async () => {
		try {
			const res = await fetch('/api/blog');
			if (!res.ok) throw new Error('Failed to fetch blogs');
			const data = await res.json();
			setBlogs(data)
		} catch (err) {
			console.error('Error fetching recent blogs:', err);
		}
	};

	useEffect(() => {
		if (slug) {
			fetchBlog();
			fetchBlogs();
		}

	}, [slug]);

	if (loading) return (
	<div className='my-5 py-5 text-center d-flex justify-content-center'><MoonLoader/></div>
	)
	return (
		<div className="blogs-section">
			<div className="container">
				<div className="row">

					{/* -------Recent Post's------- */}

					<div className="col-lg-4 responsive">
						<div className="widget-sidebar-box">
							<h4 className="sidebar-title"> Recent Post </h4>
							<div className="widget-recent-post">
								{blogs?.map((blog, idx) => (
									<div className="d-flex align-items-center mb-3 border-bottom" key={idx}>
										<div className="rpost-thumb me-3">
											<Link href={`/blogs/${blog.heading.trim().replace(/\s+/g, "-")}`}>
												<Image
													src={blog.thumbnail}
													alt={blog.heading}
													width={100}
													height={100}
													className="rounded object-cover"
												/>
											</Link>
										</div>

										<div className="rpost-content">
											<div className="rpost-title">
												{/* item.heading.length > 50 ? item.heading.slice(0, 40) + '...' : item.heading} */}
												<h5 className="mb-1">{blog.heading.length > 20 ? blog.heading.slice(0, 28) + '....' : blog.heading}</h5>
												<span className="text-muted small">  {new Date(blog?.createdAt).toLocaleString('en-GB', {
													day: 'numeric',
													month: 'long',
													year: 'numeric',
													
												})}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

					</div>

					{/*----- Blog--------- */}

					<div className="col-lg-8">
						<div className="row blogs-pr">
							<div className="col-lg-12">
								<div className="single-blog-dtls-box">
									<div className="blog-thumb">
										<Image src={blog?.thumbnail} alt={blog?.heading} width={846} height={497} />
										<div className="meta-blog">
											<a href="#"> <i className="bi bi-calendar2-check"></i> {new Date(blog?.createdAt).toLocaleString('en-GB', {
												day: 'numeric',
												month: 'long',
												year: 'numeric',
												// hour: '2-digit',
												// minute: '2-digit',
											})}</a>
										</div>
									</div>
									<div className="blog-content2">
										<h2 className="blog-title2">{blog?.heading}</h2>

										<p
											className="blog-desc2"
											dangerouslySetInnerHTML={{ __html: blog?.description }}
										></p>
									</div>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
	);
};

export default BlogDetails;