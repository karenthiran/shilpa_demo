'use client';
import React, { useEffect, useRef, useState } from "react";


const WORKFLOW = ({ data, heading, desc }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const stepRefs = useRef([]);

  // Detect screen size once
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  // Mobile Intersection Observer
  useEffect(() => {
    if (!isMobile || !stepRefs.current.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stepNum = parseInt(entry.target.dataset.step);
          if (entry.isIntersecting) {
            setActiveStep(stepNum);
            setVisibleSteps((prev) => new Set(prev).add(stepNum));
          }
        });
      },
      { threshold: 0.6 }
    );

    stepRefs.current.forEach(ref => ref && observer.observe(ref));

    return () => {
      stepRefs.current.forEach(ref => ref && observer.unobserve(ref));
    };
  }, [isMobile]);

  // Width handling for non-mobile steps
  const getDesktopStepWidth = () => {
    switch (data.length) {
      case 4: return "col-md-6 col-lg-7 col-xl-8";
      case 5: return "col-md-5 col-lg-6 col-xl-7";
      case 6: return "col-md-4 col-lg-5 col-xl-6";
      default: return "col-md-5";
    }
  };

  return (
    <>
      {/* Laptop view */}
      <div className="container hrms-container d-lg-block d-none ">


        <h2>{heading}</h2>
        <p className="w-75 font-montserrat mt-4">
          {desc}
        </p>

        <div className="d-flex flex-column flex-md-row gap-3 my-4 w-100 mx-auto  ">
          <div
            className={`d-flex flex-column flex-md-row w-100 gap-3 ${isMobile
                ? "overflow-auto vh-100 scroll-smooth"
                : "overflow-visible"
              }`}
          >
            {data?.map((step, index) => {
              const isActive = activeStep === step.number;
              const isVisible = visibleSteps.has(step.number);

              const baseClasses =
                "position-relative rounded-4 transition-all overflow-hidden flex-shrink-0";
              const activeMobileClasses =
                "w-100 p-4 bg-dark text-white";
              const inactiveMobileClasses =
                "w-100 min-vh-100 bg-light text-dark hover-bg-secondary";
              const activeDesktopClasses =
                `${getDesktopStepWidth()} h-auto p-4 bg-dark text-white overflow-hidden`;
              const inactiveDesktopClasses =
                "col-md-auto p-3 bg-light text-dark hover-bg-secondary";

              const finalStepClass = `${baseClasses} ${isMobile
                  ? isActive
                    ? activeMobileClasses
                    : inactiveMobileClasses
                  : isActive
                    ? activeDesktopClasses
                    : inactiveDesktopClasses
                } ${isMobile && isVisible ? "animate__animated animate__fadeInUp h-25" : ""}`;

              return (

                <div
                  key={step.number}
                  data-step={step.number}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className={`${finalStepClass} `}
                  onClick={() => !isMobile && setActiveStep(step.number)}
                  style={{ height: "389px" }}
                >

                  <h2
                    className={`d-flex align-items-start align-items-md-center fw-bold transition-all ${isActive
                        ? "text-white"
                        : "text-danger position-relative"
                      }`}
                    style={{
                      right: isActive ? "0" : "-1.7rem",
                      transition: "right 0.5s ease-in-out",
                    }}
                  >
                    <span className={`${isActive ? "ms-0" : " ms-2 hrmsnumber"}  display-1 fw-semibold `}>
                      {step.number}
                    </span>
                    {isActive && (
                      <span className="ms-2 fs-3 fs-md-2">{step.title}</span>
                    )}
                  </h2>

                  {isActive && (
                    <p className="mt-3 text-white fs-6 fs-md-5 lh-base">
                      {step.content}
                    </p>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="container hrms-container d-lg-none d-block ">


        <h2>{heading}</h2>
        <p className="w-75 font-montserrat mt-4">
          {desc}
        </p>
       <div className="row gy-3">
  {data.map((item) => (
    <div key={item.id} className="col-12">
      <div className="border ps-3 py-5 rounded shadow-sm h-100 d-flex align-items-center gap-3">
        <h4 className="text-black mb-0">{item.number}</h4>
        <div>
          <p className="mb-0 text-black">{item.title}</p>
          <p className="mb-0 text-muted">{item.content}</p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </>
  );
};

export default WORKFLOW;
