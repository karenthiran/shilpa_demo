import React from 'react'

const Casestudy = () => {
const caseStudies = [
    {
      title: "HRMS | Services (Field Teams) | 90 Employees",
      challenge:
        "Manual attendance cleanup and last-minute payroll runs caused errors and late payslips.",
      whatWeDid:
        "Biometrics + late/OT rules, leave self-service, EPF/ETF/APIT automation, LKR bank files, month-end locking.",
      result:
        "70% payroll prep time, 0 EPF/ETF rejections last quarter, payslips (EN/SI) delivered on time.",
      image: "/images/hrms-person.jpg",
    },
    {
      title: "ISO 9001 | Education | Multi-Site",
      challenge:
        "Scattered SOPs, unclear responsibilities, and audit-day panic.",
      whatWeDid:
        "Gap → SOP pack → IA training → internal audits → MRM → audit-day coaching.",
      result:
        "Certified on first attempt, NC closures within SLA, cleaner handovers.",
      image: "/images/payroll.jpg",
    },
    {
      title: "Training & OBT | Retail | 120 Employees",
      challenge:
        "Escalations, weak handovers, and low supervisor confidence.",
      whatWeDid:
        "Supervisory skills + OBT at Kitulgala (EN/SI/TA), 30•60•90 follow-through with manager coaching.",
      result:
        " Measurable drop in escalation time, attendance improvement, stronger handovers",
      image: "/images/crm-team.jpg",
    },
    {
      title: "Private Security | Logistics | 6 Sites",
      challenge:
        " Inconsistent guard-room documentation; incident reports varied by site.",
      whatWeDid:
        "Guard SOPs, induction, surprise audits, CAPA tracker, buyer-style evidence packs.",
      result:
        " Faster client audits, standardised incident reporting, renewal scores up.",
      image: "/images/crm-team.jpg",
    },
    {
      title: " ISO 22000 + HACCP | Food SME | Single Site",
      challenge:
        "Incomplete PRPs, traceability gaps, weak drill records.",
      whatWeDid:
        "HACCP study, PRP mapping, traceability/recall drills, monitoring registers.",
      result:
        "Audit NCs closed within 7 days, confident buyer inspections.",
      image: "/images/crm-team.jpg",
    },
    {
      title: " HRMS | Services (Field Teams) | 90 Employees",
      challenge:
        " Field attendance disputes, manual travel allowance calculation.",
      whatWeDid:
        "Geo-tag web clock-in, travel/day-allowance slabs, project-wise cost export, multi-level approvals.",
      result:
        " Fewer disputes, cleaner month-end reconciliation, faster payouts.",
      image: "/images/crm-team.jpg",
    },
  ];

  return (
    <section className="container my-5">
      <div className="row gy-4">
        {caseStudies.map((item, index) => (
          <div className="col-12" key={index}>
            <div className="hrms-section rounded-4 p-4 p-md-5 ">
              <div className="row align-items-center g-4">
                {/* Left Text */}
                <div className="col-lg-7 col-md-12 ">
                  <h3 className="fw-bold text-dark mb-4">{item.title}</h3>

                  <div className="mb-3">
                    <div className="fw-bold text-dark" style={{fontSize:"20px"}}>Challenge</div>
                    <p className="mb-0 text-secondary">{item.challenge}</p>
                  </div>

                  <div className="mb-3">
                    <div className="fw-bold text-dark"  style={{fontSize:"20px"}}>What we did</div>
                    <p className="mb-0 text-secondary">{item.whatWeDid}</p>
                  </div>

                  <div className="mb-3">
                    <div className="fw-bold text-dark"  style={{fontSize:"20px"}}>Result</div>
                    <p className="mb-0 text-secondary">{item.result}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Casestudy