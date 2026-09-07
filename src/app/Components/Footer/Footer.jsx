"use client"
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [newsletter, setNewsletter] = useState("");


  const UsefulLinks = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Services', link: '/service' },
    { title: 'Latest Blog', link: '/blog' },
    { title: 'Case Studies', link: '#' },
    { title: 'Contact Us', link: '/contact' },

  ];

  const AdressContent = {
    address: '215 – J5, Park Road, Colombo 00500, Sri Lanka',
    email: 'shilpa.advisors@sltnet.lk',
    Number: '+94 77 764 0985',
    WorkingStart: 'Mon–Fri 08:30–17:30',
    WorkingEnd: 'Sat 08:30–13:30'
  }

  const LogoContent = {
    img1: '/assets/images/slider/Shilpa-Logo.svg',
  }

  // useEffect(() => {
  //   loadBackgroudImages();
  // }, []);

  const handleNewsletterChange = (e) => {
    setNewsletter(e.target.value);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletter.trim()) {
      alert("Please enter your email before submitting!");
      return;
    }
    console.log("Newsletter submitted:", newsletter);

    // Example: you can later connect this to an API
    // fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email: newsletter }) });

    alert(`Thank you for subscribing, ${newsletter}!`);
    setNewsletter("");
  };

  return (
    // <div className="footer-section" data-background="/assets/images/resource/footer-bg.jpg">
    <div className="footer-section" style={{
        backgroundImage: `url('/assets/images/resource/footer-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="widget widgets-company-info ">
              <div className="dreamhub-logo">
                <Link className="logo_thumb" href="/" title="dreamhub">
                  <Image src={LogoContent.img1} alt="shilpa-logo" width={124} height={26} />
                </Link>
              </div>

              <div className="follow-company-icon mt-3">
                <Link href="https://www.facebook.com/shilpadvisors"><i className="bi bi-facebook"></i> </Link>
                <Link href="https://www.youtube.com/@ShilpaAdvisors"> <i className="bi bi-youtube"></i></Link>
                <Link href="https://linkedin.com/company/shilpa-advisors"> <i className="bi bi-linkedin"></i> </Link>
                <Link href="https://www.instagram.com/shilpaadvisors/"> <i className="bi bi-instagram"></i> </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pl-40">
            <div className="widget widget-nav-menu">
              <h4 className="widget-title">Informations</h4>
              <div className="menu-quick-link-content">
                <ul className="footer-menu">
                  {UsefulLinks?.map((item, i) => (
                    <li key={i}><Link href={item.link}> {item.title} </Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget widget-nav-menu">
              <h4 className="widget-title"> Contact Us </h4>
              <div className="menu-quick-info-content ">
                <ul className="footer-info  px-2">
                  <li> {AdressContent.address} </li>
                  <li><span className="border-undr"> {AdressContent.email} </span></li>
                  <li> {AdressContent.Number}</li>
                  <li> {AdressContent.WorkingStart}</li>
                  <li> {AdressContent.WorkingEnd}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pr-0">
            <div className="menu-quick-link-contact">

              <h4 className="widget-title"> Newsletter </h4>
              <div className="subscribe-widget">
                <form onSubmit={handleNewsletterSubmit}>
                  <div className="d-flex align-items-center">
                    <input
                      type="email"
                      className="src-input-box"
                      placeholder="Enter your email"
                      name="newsletter"
                      value={newsletter}
                      onChange={handleNewsletterChange}
                      required
                    />
                    <button type="submit" className="input-icn border-0 bg-transparent d-flex">
                      <i className="bi bi-send-fill"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="widget-desc">
                <p>When do they work well, and when do they on us and finally,</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-bg">
          <div className="col-lg-6 col-md-6">
            <div className="footer-bottom-content">
              <div className="footer-bottom-content-copy">
                <p>© 2026 Quantum Crafter Studio. All rights reserved.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="footer-bottom-menu text-right">
              <ul>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-condition">Terms & Conditions</Link></li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer; 