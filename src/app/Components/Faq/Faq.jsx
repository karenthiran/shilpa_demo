"use client";
import { useEffect, useRef, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Faq = ({ leftdata, rightdata }) => {
  const accordionContentRef = useRef(null);

  // separate states for left and right accordions
  const [openLeftIndex, setOpenLeftIndex] = useState(-1);
  const [openRightIndex, setOpenRightIndex] = useState(-1);

  const handleLeftClick = (index) => {
    setOpenLeftIndex(openLeftIndex === index ? -1 : index);
  };


  const handleRightClick = (index) => {
    setOpenRightIndex(openRightIndex === index ? -1 : index);
  };

  // useEffect(() => {
  //   loadBackgroudImages();
  // }, []);

  return (
    // <div
    //   className="about-section style-three faq"
    //   data-background="/assets/images/resource/about-bg3.jpg"
    // >
    <div
      className="about-section style-three faq"
      style={{
        backgroundImage: `url('/assets/images/resource/about-bg3.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dexon-section-title text-center padding-lg">
              <h2>{`Frequently Asked Question's`}</h2>
            </div>
          </div>

          {/* Left Accordion */}
          <div className="col-lg-6 col-md-6 faq-pd">
            <div className="tab_container ">
              <div id="tab1" className="tab_content ">
                <ul className="accordion ">
                  {leftdata?.map((item, index) => (
                    <li
                      key={index}
                      className={`cs_accordian  ${index === openLeftIndex ? "active" : ""
                        }`}
                    >
                      <a onClick={() => handleLeftClick(index)} className={` ${index === openLeftIndex ? "border-bottom-0	" : ""}`}>
                        <div className="d-flex justify-content-between  w-100 gap-3">
                          <span >{item.question}</span>
                          <i className="bi bi-chevron-down "></i>

                        </div>
                      </a>
                      <p
                        ref={accordionContentRef}
                        style={{
                          display: index === openLeftIndex ? "block" : "none",
                        }}
                      >
                        {item.answer}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="col-lg-6 col-md-6">
            <div className="tab_container">
              <div id="tab1" className="tab_content">
                <ul className="accordion">
                  {rightdata?.map((item, index) => (
                    <li
                      key={index}
                      className={`cs_accordian ${index === openRightIndex ? "active" : ""
                        }`}
                    >
                       <a onClick={() => handleRightClick(index)} className={` ${index === openRightIndex ? "border-bottom-0	" : ""}`}>
                        <div className="d-flex justify-content-between  w-100 gap-3">
                          <span>{item.question}</span>
                          <i className="bi bi-chevron-down "></i>

                        </div>
                      </a>
                      <p
                        ref={accordionContentRef}
                        style={{
                          display: index === openRightIndex ? "block" : "none",
                        }}
                      >
                        {item.answer}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
