'use client'
import Acheive from '@/app/Components/About/Acheive'
import { handleuseCalendly } from '@/app/Components/CalendlyBadge/CalendlyBadge'
import BreadCumb from '@/app/Components/Common/BreadCumb'
import Cta from '@/app/Components/Cta/Cta'
import WORKFLOW from '@/app/Components/WORKFLOW/WORKFLOW'
import overflow3 from '@/app/Data/overflow3.json'
import React from 'react'

const HRMSoftwareSolution = () => {
  const calendlyAction = handleuseCalendly()
  const about1listItem = [
        "End-to-end HR management under one roof",
        "Reduced administrative burden and HR costs",
        "Improved accuracy, compliance, and data security",
        "Scalable solutions as your organization grows",
    ]
     const ctaList = [
        "HRM Software for in-house HR teams",
        "HRM Outsourcing Services for complete HR delegation",
        "A hybrid model combining software with expert HR support",
       
    ]
  return (
   <>
   <BreadCumb
        bgImg="/assets/images/resource/inner-bg.webp"
        subTitle="Services"
        title="Smart & Integrated HRM Software"
        content="Our HRM Software is an all-in-one digital platform designed to automate and centralize your entire HR function. From recruitment and onboarding to payroll, compliance, performance, and exit management, our system ensures accuracy, transparency, and operational efficiency across the employee lifecycle.
                Whether you are a startup, SME, or a growing enterprise, our HRM Software helps you reduce manual work, minimize errors, and manage HR operations professionally through a single, secure platform.
                "
        buttons={{ btn1: { label: "Request HRM Software Demo", link:calendlyAction }, btn2: { label: "Talk to Our HR Tech Experts", link:calendlyAction } }}

      />
        <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">
                    {/* <Problem data={service1} /> */}
                    <Acheive
                        // mainimage="/assets/images/resource/about.png"
                        mainimage="/assets/images/slider/hrms-achieve.webp"
                        title1="Why You Need HRM Software Today"
                        listItem={about1listItem}
                        btnName="Hire-to-Retire HRMS Checklist for Asian SMEs (PDF)"
                        btnUrl="/hrms-pdf"
                    />
                   
                </div>
            </div>
            <WORKFLOW data={overflow3} heading="Benefits of Using Our HRM Software " />
            <Cta
                title="HRM Software, HRM Outsourcing Or a Hybrid Model"
                list={ctaList}
                para="We understand that every business has different HR needs. You can choose:" sideicon={false}
            />
            <Cta
                title="Get Started With Smart HR Technology"
                para="Upgrade to a smarter, compliant HR system"
                 buttons={{ btn1: { label: "schedule your demo now.", link: calendlyAction }}}
                sideicon={false}
            />
   </>
  )
}

export default HRMSoftwareSolution