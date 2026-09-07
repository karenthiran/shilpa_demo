import React from "react";

const pillars = [
  {
    heading: "People",
    tagline: "People make the organisation.",
  },
  {
    heading: "Process",
    tagline: "Processes make it consistent.",
  },
  {
    heading: "Performance",
    tagline: "Performance makes it successful.",
  },
  {
    heading: "Protection",
    tagline: "Protection makes it sustainable.",
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
              <div className="feature-single-box feature-height">
                <div className="feature-content">
                  <h2>{item.heading}</h2>
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
