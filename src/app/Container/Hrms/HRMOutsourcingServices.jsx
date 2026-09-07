'use client'
import React from 'react'
import { handleuseCalendly } from '@/app/Components/CalendlyBadge/CalendlyBadge'
import BreadCumb from '@/app/Components/Common/BreadCumb'
import { BreadCrumb } from 'primereact/breadcrumb'
import Reliability from '@/app/Components/Services/Reliability'
import WORKFLOW from '@/app/Components/WORKFLOW/WORKFLOW'
import overflow2 from '@/app/Data/overflow2.json'
import Acheive from '@/app/Components/About/Acheive'
import Cta from '@/app/Components/Cta/Cta'
import IndustriesWeServe from './IndustriesWeServe'

const HRMOutsourcingServices = () => {
  const calendlyAction = handleuseCalendly()
  const about1listItem = [
        "End-to-end HR management under one roof",
        "Reduced administrative burden and HR costs",
        "Improved accuracy, compliance, and data security",
        "Scalable solutions as your organization grows",
    ]
    const images = [
    {
      src: "/assets/images/slider/industryweserve1.png",
      title: "Startups and Growing Businesses",
    },
    {
      src: "/assets/images/slider/industryweserve2.png",
      title: "Small & Medium Enterprises",
    },
    {
      src: "/assets/images/slider/industryweserve3.png",
      title: "Manufacturing and Industrial Units",
    },
    {
      src: "/assets/images/slider/industryweserve4.png",
      title: "IT & Technology Companies",
    },
    {
      src: "/assets/images/slider/industryweserve5.png",
      title: "Professional Services Firms",
    },
  ];
  return (
    <>
      <BreadCumb
        bgImg="/assets/images/resource/inner-bg.webp"
        subTitle="Services"
        title="HRM Outsourcing Services"
        content="We act as your extended HR team, handling everything from CV sourcing and hiring to payroll, compliance, employee management, and exit formalities.
            Our experts ensure smooth HR operations, statutory compliance, and accurate full & final settlements.
            This reduces HR costs and lets your leadership focus fully on business growth."
        buttons={{ btn1: { label: "Get HR Outsourcing Consultation", link:calendlyAction }, btn2: { label: "Outsource Your HR Today", link:calendlyAction } }}

      />
      <Reliability heading="Job Portal-Style Recruitment System" para="We provide a structured, job portal–like recruitment system that simplifies candidate sourcing and application management.
Candidates can directly upload or submit their CVs through our website, career page, or shared recruitment channels. All applications are securely stored in a centralized database, making tracking, filtering, and shortlisting efficient and transparent.
This ensures a continuous talent pipeline and a professional hiring experience for candidates.
" />
 <WORKFLOW data={overflow2} heading="End-to-End HRM Outsourcing Model" />
  <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">
                    {/* <Problem data={service1} /> */}
                    <Acheive
                        // mainimage="/assets/images/resource/about.png"
                        mainimage="/assets/images/slider/hrms-achieve.webp"
                        title1="Why Choose Our HRM Outsourcing Services"
                        listItem={about1listItem}
                        btnName="Hire-to-Retire HRMS Checklist for Asian SMEs (PDF)"
                        btnUrl="/hrms-pdf"
                    />
                   
                </div>
            </div>
            <IndustriesWeServe images={images}/>
            <Cta
                title="Outsource Your HR With Confidence"
                para=" Build a compliant, people-first workplace. "
                 buttons={{ btn1: { label: "Get in touch.", link: calendlyAction }}}
                sideicon={false}
            />
    </>
  )
}

export default HRMOutsourcingServices