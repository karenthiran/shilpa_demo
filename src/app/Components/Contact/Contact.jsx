"use client";
import { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    service: "",
    file: null,
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  // 🧠 Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] }); 
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 📨 Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // ✅ Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus({ type: "error", message: "Please fill all required fields." });
      setLoading(false);
      return;
    }

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) data.append(key, value);
      });

      const response = await fetch("https://formspree.io/f/myyleorq", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "✅ Your message has been sent successfully!",
        });
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          service: "",
          file: null,
        });
      } else {
        setStatus({
          type: "error",
          message: " Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setStatus({
        type: "error",
        message: "⚠️ Network error. Please check your connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-us py-5">
      <div className="container">
        <div className="row align-items-center ">
          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0 ">
            <div className="contact-thumb text-center">
              <Image
                src="/assets/images/resource/contact.jpg"
                alt="Contact"
                width={624}
                height={681}
                className="rounded-4 shadow"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6">
            <div className="dexon-section-title">
              <h2>Send Us a Message</h2>
              <p>{`Send us your valuable message & we'll reply to you soon!`}</p>
            </div>

            <div className="contact-form-box3 bg-white p-4 rounded-4 shadow-sm">
              <form onSubmit={handleSubmit}>
                <div className="row ">
                  <div className="col-12">
                    <h6 className="form-title">Name*</h6>
                    <div className="form-box p-0">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <h6 className="form-title">Company*</h6>
                    <div className="form-box">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter Company Name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <h6 className="form-title">Your E-Mail*</h6>
                    <div className="form-box">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter E-Mail"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <h6 className="form-title">Phone*</h6>
                    <div className="form-box">
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Phone Number"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <h6 className="form-title">Message*</h6>
                    <div className="form-box">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write Your Message"
                        rows="4"
                        className="form-control"
                      />
                    </div>
                  </div>

                  {/* ✅ Fixed Select Field */}
                  <div className="col-12 mt-5">
                    <h6 className="form-title">Service*</h6>
                    <div className="form-box">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-control"
                        required
                      >
                        <option value="" disabled hidden>Select Service</option>
                        <option value="hrms">HRMS</option>
                        <option value="iso">ISO</option>
                        <option value="psis">PSIS</option>
                        <option value="etd">ETD</option>
                      </select>
                    </div>
                  </div>

                  {/* ✅ Fixed File Upload */}
                  <div className="col-12">
                    <h6 className="form-title">Attach a file</h6>
                    <div className="form-box ">
                      {/* Hidden File Input */}
                      <input
                        type="file"
                        name="file"
                        id="fileInput"
                        onChange={handleChange}
                        className="d-none"
                      />

                      {/* Clickable Upload Image */}
                      <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                        <Image
                          src="/assets/images/slider/upload.png"
                          alt="upload"
                          width={78}
                          height={48}
                        />
                        <span className="text-dark px-4 py-2 text-base">Attach file (less than 10MB)</span>
                      </label>
                    </div>
                  </div>


                  <div className="col-12 text-center buttons">
                    <button
                      type="submit"
                      className={`btn btn-dark text-white px-5 py-2 rounded-pill ${loading ? "disabled" : ""
                        }`}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Submit Now"}
                    </button>
                  </div>
                </div>
              </form>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`mt-3 text-center fw-semibold ${status.type === "success" ? "text-success" : "text-danger"
                    }`}
                >
                  {status.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
