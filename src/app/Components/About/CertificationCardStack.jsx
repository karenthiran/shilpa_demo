'use client';
import Image from 'next/image';
import React, { useState } from 'react';

/* ---------------- DATA ---------------- */
const cards = [
  {
    title: 'HR Certification',
    description:
      'Certified in modern human resource management practices, workforce development, and organizational compliance.',
    buttons: ['MBA', 'Trg of Trainer', 'TtTrg'],
    image: '/assets/images/resource/1.png',
    imgWidth: 58,
  },
  {
    title: 'ISO Certification',
    description:
      'Certified in modern human resource management practices, workforce development, and organizational compliance.',
    buttons: ['22000', '9001', '19011', '21001', '22001', '31000', '45001'],
    image: '/assets/images/resource/2.png',
    imgWidth: 109,
  },
  {
    title: 'Security Certification',
    description:
      'Certified in modern human resource management practices, workforce development, and organizational compliance.',
    buttons: ['CSR', 'CTPAT', 'SA 8000', 'Security MGT', 'WRAP IA', 'WRAP Lead','Event MGT System'],
    image: '/assets/images/resource/3.png',
    imgWidth: 109,
  },
];

/* ---------------- BUTTON → IMAGE MAP ---------------- */
const certificateImages = {
  MBA: '/assets/images/Certificates/HR/MBA.jpg',
  'Trg of Trainer': '/assets/images/Certificates/HR/Trg-of-Trainer.png',
  TtTrg: '/assets/images/Certificates/HR/TtTrg.png',

  '22000': '/assets/images/Certificates/ISO/2.jpg',
  '9001': '/assets/images/Certificates/ISO/9001-2.png',
  '19011': '/assets/images/Certificates/ISO/19011.png',
  '21001': '/assets/images/Certificates/ISO/21001.png',
  '22001': '/assets/images/Certificates/ISO/22001.jpg',
  '31000': '/assets/images/Certificates/ISO/31000.png',
  '45001': '/assets/images/Certificates/ISO/45001.jpg',


    CSR: '/assets/images/Certificates/Security/CSR.jpg',
    CTPAT: '/assets/images/Certificates/Security/CTPAT.jpg',
    'SA 8000': '/assets/images/Certificates/Security/SA-8000.png',
    // SAST: '/assets/images/Certificates/Security/SAST.png',
    'Security MGT': '/assets/images/Certificates/Security/Security-MGT.png',
    'WRAP IA': '/assets/images/Certificates/Security/WRAP-IA.png',
    'WRAP Lead': '/assets/images/Certificates/Security/WRAP-Lead-Aud.png',
    'Event MGT System':'/assets/images/Certificates/Security/Event-Security-Manamement.jpeg'
};

/* ---------------- COMPONENT ---------------- */
export default function CertificationCardStack() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      {/* ================= PAGE ================= */}
      <div
        className="about-section style-three relative"
        style={{
          backgroundImage: `url('/assets/images/resource/about-bg3.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="page">
          <div className="stack-wrapper">
            <div className="container">
              <div className="stack-section">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="stack-card"
                    style={{ top: `${index * 90}px` }}
                  >
                    <div className="card-content">
                      <h2 className="display-5 fw-semibold">
                        {card.title}
                      </h2>
                      <p>{card.description}</p>

                      <div className="button-row hero-button">
                        {card.buttons.map((btn, i) => (
                          <button
                            key={i}
                            className="card-btn"
                            onClick={() =>
                              setActiveImage(certificateImages[btn])
                            }
                          >
                            {btn} <span>↗</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="card-number">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={card.imgWidth}
                        height={140}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= POPUP ================= */}
      {activeImage && (
  <div className="popup-overlay" onClick={() => setActiveImage(null)}>
    {/* BLURRED BACKGROUND */}
    <div
      className="popup-blur"
      style={{ backgroundImage: `url(${activeImage})` }}
    />

    {/* POPUP CARD */}
    <div
      className="popup-card"
      onClick={(e) => e.stopPropagation()}
    >
      {/* CLOSE BUTTON */}
      <button
        className="popup-close"
        onClick={() => setActiveImage(null)}
      >
        <Image
          src="/assets/images/resource/close-pop.png"
          alt="Close"   
          width={24}
          height={24}
          />
      </button>
       <a
    href={activeImage}
    download
    className="popup-download"
    onClick={(e) => e.stopPropagation()}
  >
    ⬇ Download
  </a>

 <Image
  src={activeImage}
  alt="Certificate"
  width={0}
  height={0}
  sizes="100vw"
  className="popup-img"
  style={{
    width: "auto",
    maxWidth: "80vw",
    height: "80vh",
    objectFit: "contain",
    imageOrientation: "none", // 🔥 IMPORTANT
  }}
  unoptimized   // 🔥 IMPORTANT
/>
    </div>
  </div>
)}

    </>
  );
}
