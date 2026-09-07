"use client";
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";
import { FcClock } from "react-icons/fc";

const Cta2 = () => {
  // useEffect(() => {
  //   loadBackgroudImages();
  // }, []);

  return (
    // <div
    //   className="call-to-action style-two"
    //   data-background="/assets/images/resource/call-bg.png"
    // >
    <div
      className="call-to-action style-two"
      style={{
        backgroundImage: `url('/assets/images/resource/call-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row dream1-bg">
          {/* Email Section */}
          <div className="col-lg-4 col-md-6">
            <a
              href="mailto:shilpa.advisors@sltnet.lk"
              className="text-decoration-none text-light"
            >
              <div className="contact-info">
                <div className="contact-icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="contact-title">
                  <span>Email Us</span>
                  <h5>shilpa.advisors@sltnet.lk</h5>
                </div>
              </div>
            </a>
          </div>

          {/* WhatsApp Section */}
          <div className="col-lg-4 col-md-6">
            <a
              href="https://wa.me/94777640985"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-light"
            >
              <div className="contact-info upper">
                <div className="contact-icon">
                  <i className="bi bi-whatsapp"></i>
                </div>
                <div className="contact-title">
                  <span>Phone/WhatsApp</span>
                  <h5>+94 77 764 0985</h5>
                </div>
              </div>
            </a>
          </div>

          {/* Business Hours */}
          <div className="col-lg-4 col-md-6">
            <div className="contact-info upper2">
              <div className="contact-icon">
                {/* <i className="bi bi-send-fill"></i> */}
                <FcClock className="clock" />

              </div>
              <div className="contact-title">
                <span>Business Hours</span>
                <h5>
                  Mon–Fri 08:30–17:30 <br /> Sat 08:30–13:30 (Sri Lanka)
                </h5>
              </div>
            </div>
          </div>

          {/* Shapes */}
          <div className="call-to-all-shape">
            <div className="call-shape">
              <Image
                src="/assets/images/resource/line.png"
                alt="cta-line"
                width={302}
                height={376}
              />
            </div>
            <div className="call-shape3">
              <Image
                src="/assets/images/resource/shap1.png"
                alt="shape1"
                width={41}
                height={42}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta2;
