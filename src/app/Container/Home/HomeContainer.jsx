"use client";
import { handleuseCalendly } from "@/app/Components/CalendlyBadge/CalendlyBadge";
import Cta from "@/app/Components/Cta/Cta";
import Faq from "@/app/Components/Faq/Faq";
import Feature1 from "@/app/Components/Feature/Feature1";
import HeroBanner1 from "@/app/Components/HeroBanner/HeroBanner1";
import FourPillars from "@/app/Components/Home/FourPillars";
import HomeResources from "@/app/Components/Home/HomeResources";
import WhyChoose from "@/app/Components/Home/WhyChoose";
import VisionMissionCards from "@/app/Components/About/VisionMissionCards";
import Service1 from "@/app/Components/Services/Service1";
import Services2 from "@/app/Components/Services/Services2";
import Testimonial1 from "@/app/Components/Testimonial/Testimonial1";
import { home_Faq1, home_Faq2 } from "@/app/Data/questions";
import { resourceData } from "@/app/Data/Resources/HomeReources";
import { howWework } from "@/app/Data/services2";
import React from "react";

const HomeContainer = () => {
  const HeadingContent = {
    title1: "Services",
    Content:
      "FOUR PILLARS → FOUR SOLUTION AREAS → INDIVIDUAL SERVICES. From HRMS payroll (EPF/ETF/APIT) to ISO certification, Employee Training & OBT (Kitulgala), and Private Security SOPs, we turn standards into daily practice for Asian SMEs. Fast rollouts, practical tools, and audit-ready results—without disrupting operations.",
  };
  const Service2HeadingContent = {
    subtitle: "Improve your Business",
    title: "How We Work",
    Content:
      "We make complex standards simple: discover the gaps, fix with practical docs & training, and prove with audits. You get calm month-ends, confident audit days, and a team that owns the process.",
    mainImg: "/assets/images/slider/home-how_we_work.webp",
  };
  const calendlyAction = handleuseCalendly();

  return (
    <div>
      <HeroBanner1
        bgmage="/assets/images/slider/hero-bg.avif"
        Title1="One Partner. Four Pillars."
        Title2="Stronger Organisations"
        content="At Shilpa Advisors, we bring People, Process, Performance, and Protection together under one trusted umbrella — practical, professional, and integrated solutions to strengthen your organisation and support sustainable growth."
        heroShape1="/assets/images/slider/Frame-7.png"
        heroShape2="/assets/images/slider/hero-shp2.png"
        buttons={{
          btn1: { label: " Get a 15-Minute Fit Call", link: calendlyAction },
          btn2: {
            label: "Watch 90-sec HRMS Demo",
            link: "https://youtu.be/COPPFiE2RwQ",
          },
        }}
      />

      <FourPillars />
      <Feature1 />
      <Service1 headcontent={HeadingContent} />
      <WhyChoose />
      <VisionMissionCards
        visionText="To be the most trusted and affordable partner of SMEs to uplift their standards to a global level."
        missionText="To empower businesses through suited people, simplified processes, enhanced performance, and 360-degree protection."
      />
      <Testimonial1 />
      <Services2 headcontent={Service2HeadingContent} data={howWework} />
      <HomeResources resources={resourceData} />
      <Faq leftdata={home_Faq1} rightdata={home_Faq2} />
      <Cta
        title="Ready to build compliant, growth-ready operations?"
        buttons={{
          btn1: { label: " Get Demo", link: calendlyAction },
          btn2: { label: "Talk to Sales", link: calendlyAction },
        }}
        sideicon={true}
      />
    </div>
  );
};
export default HomeContainer;
