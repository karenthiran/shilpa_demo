"use client";
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Acheive from "../About/Acheive";
import Fix from "../Fix/Fix";

const Feature1 = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      loadBackgroudImages();
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className="feature-section"
      //   data-background="/assets/images/resource/feature-bg.jpg"
      style={{
        backgroundImage: "url(/assets/images/resource/feature-bg.jpg)",
      }}
    >
      <div className="container">
        <Acheive
          mainimage="/assets/images/slider/Home-GlobalScale.png"
          title1="Built for global scale, local rules"
          collageImages={[
            "/assets/images/slider/hrms-achieve.png",
            "/assets/images/slider/iso-achieve.webp",
            "/assets/images/slider/etd-How _We _Make.webp",
            "/assets/images/slider/security-achieve.png",
          ]}
          listItem={[
            "HRMS: country taxes, social security, payslips, bank files",
            "ISO: 9001 · 45001 · 22000 · 14001 · 21001 · 39001 · HACCP/GMP",
            "Training: leadership, compliance, experiential offsites",
            "Security: ISO 18788 alignment, SOPs, incident reporting",
          ]}
          btnName="See our compliance stack"
          btnUrl="/shilpa-advisors-pdf"
        />

        <Fix
          mainimage="/assets/images/slider/home-fix.webp"
          title1="What You'll Fix in Week 1"
          listItem={[
            "HRMS: Manual payroll → automated cycles; on-time payslips",
            "ISO: Chaos → clear gap plan; docs, IAs, audit-day support",
            "Training: Skill gaps → focused workshops; visible ownership",
            "Security: Ad-hoc ops → SOPs, drills, surprise audits & logs",
          ]}
          btnName="Show me how it works"
          btnUrl="/shilpa-advisors"
        />
      </div>
    </div>
  );
};

export default Feature1;
