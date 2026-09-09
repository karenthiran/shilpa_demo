import React from "react";
import Image from "next/image";

const pillars = [
  {
    heading: "People",
    tagline: "People make the organisation.",
    image:
      "https://res.cloudinary.com/dtqsjarsl/image/upload/v1788942992/People_oliw70.png",
    color: "#3f7d3f",
  },
  {
    heading: "Process",
    tagline: "Processes make it consistent.",
    image:
      "https://res.cloudinary.com/dtqsjarsl/image/upload/v1788942992/Process_lja1nl.png",
    color: "#d4a017",
  },
  {
    heading: "Performance",
    tagline: "Performance makes it successful.",
    image:
      "https://res.cloudinary.com/dtqsjarsl/image/upload/v1788942992/Performance_l1rdtx.png",
    color: "#1f4e79",
  },
  {
    heading: "Protection",
    tagline: "Protection makes it sustainable.",
    image:
      "https://res.cloudinary.com/dtqsjarsl/image/upload/v1788942992/Protection_meilae.png",
    color: "#c1571f",
  },
];

const FourPillars = () => {
  return (
    <div
      className="about-section relative"
      data-background="/assets/images/resource/about-bg3.jpg"
    >
      <div className="container">
        <div className="dexon-section-title text-center mb-4">
          <h2>One Partner. Four Pillars. Stronger Organisations</h2>
          <p>
            Every successful organisation is built on four essential pillars —
            People, Process, Performance, and Protection. At Shilpa Advisors, we
            bring these four pillars together under one trusted umbrella,
            providing SMEs with practical, professional, and integrated
            solutions to strengthen their organisations and support sustainable
            growth.
          </p>
        </div>

        <div className="row">
          {pillars.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="pillar-card">
                <div className="pillar-image-wrap">
                  <Image
                    src={item.image}
                    alt={item.heading}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="pillar-image"
                  />
                  <span
                    className="pillar-accent"
                    style={{ background: item.color }}
                  ></span>
                </div>
                <div className="feature-content">
                  <h2 style={{ color: item.color }}>{item.heading}</h2>
                  <p>{item.tagline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <h3 className="fw-semibold">
            We help bring your Four Pillars together — Steady, Strong, and
            Powerful.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FourPillars;
