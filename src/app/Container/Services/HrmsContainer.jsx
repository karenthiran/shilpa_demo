'use client'
import React from 'react'
import BreadCumb from '@/app/Components/Common/BreadCumb';
import overflow from '@/app/Data/overflow.json'
import Cta from '@/app/Components/Cta/Cta';
import { service_Faq1, service_Faq1_2 } from '@/app/Data/questions';
import { service1 } from '@/app/Data/service/service1';
import WORKFLOW from '@/app/Components/WORKFLOW/WORKFLOW';
import Scenerios from '@/app/Components/Services/Scenerios';
import Reliability from '@/app/Components/Services/Reliability';
import Problem from '@/app/Components/Services/Problem';
import Acheive from '@/app/Components/About/Acheive';
import CoreModules from '@/app/Components/Services/CoreModules';
import Hrms from '@/app/Components/Services/Hrms';
import Faq from '@/app/Components/Faq/Faq';
import { customhrms } from '@/app/Data/service/Hrms';
import { scenarios } from '@/app/Data/service/scenerios';
import { handleuseCalendly } from '@/app/Components/CalendlyBadge/CalendlyBadge';
import ResponsiveWorkflow from '@/app/Components/WORKFLOW/WORKFLOW';
import BreadCumb2 from '@/app/Components/Common/BreadCumb2';
import Hrms2 from '@/app/Components/Services/Hrms2';
import Industries from '../Hrms/IndustriesWeServe';
import IndustriesWeServe from '../Hrms/IndustriesWeServe';

const HrmsContainer = () => {
    const about1listItem = [
        "End-to-end HR management under one roof",
        "Reduced administrative burden and HR costs",
        "Improved accuracy, compliance, and data security",
        "Scalable solutions as your organization grows",
    ]
    const ctaList = [
        "Only HRM Software for companies with in-house HR teams",
        "Only HRM Outsourcing for businesses that want to fully delegate HR",
        "A hybrid model combining HRM Software + HR Outsourcing for maximum efficiency",
        // "Migration (masters, YTD, balances, history) ",
        // " Go-Live (optional parallel run; period lock) ",
        // " Post-Go (30–60–90 day tune-ups; L1/L2/L3 under SLA)."
    ]
    const reliabilitylist = [
        "Experienced HR professionals and domain experts",
        "Latest HR technology and secure systems",
        "Customized solutions as per business size and industry",
        "Dedicated support and continuous improvement",
        "Transparent processes and reliable service delivery"

    ]
    const images = [
    {
      src: "/assets/images/slider/industryweserve1.png",
      title: "Small & Medium Enterprises",
    },
    {
      src: "/assets/images/slider/industryweserve2.png",
      title: "Manufacturing & Industrial Units",
    },
    {
      src: "/assets/images/slider/industryweserve3.png",
      title: "IT & Technology Companies",
    },
    {
      src: "/assets/images/slider/industryweserve4.png",
      title: "Professional Services Firms",
    },
    {
      src: "/assets/images/slider/industryweserve5.png",
      title: "Retail & Service-Based Businesses",
    },
  ];

    const calendlyAction = handleuseCalendly()
    return (
        <div>
          
            <BreadCumb2
                bgImg="/assets/images/resource/inner-bg.webp"
                subTitle="Services"
                title="HRM Software & HRM Outsourcing Solutions"
                content="In today's fast-growing business environment, HR goes beyond hiring. Managing the full employee lifecycle, payroll, compliance, and engagement requires the right expertise and systems.
                        Our end-to-end HRM software and outsourcing services simplify HR operations, reduce costs, and ensure compliance—so you can focus on growing your business.
                        Scalable and flexible solutions for startups, SMEs, and large organizations.
                        "
                buttons={{ btn1: { label: "Explore HRM Software", link: "/hrms-Software-Solution" }, btn2: { label: "Explore HRM Outsourcing Services", link: "/hrms-Outsourcing-Services" } }}
            />
            <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">
                    {/* <Problem data={service1} /> */}
                    <Acheive
                        // mainimage="/assets/images/resource/about.png"
                        mainimage="/assets/images/slider/hrms-achieve.png"
                        title1="Why Choose Our HRM Solutions"
                        listItem={about1listItem}
                        // btnName="Hire-to-Retire HRMS Checklist for Asian SMEs (PDF)"
                        // btnUrl="/hrms-pdf"
                    />
                    {/* 
                   */}
                </div>
            </div>
            <WORKFLOW data={overflow} heading="Key Features of Our HRM Software" />
             <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">

            <CoreModules />
             
                </div>
                </div>
            <Cta
                title="HRM Software vs HRM Outsourcing"
                list={ctaList}
                para="We understand that every business has unique needs. That’s why we offer flexible engagement models:" sideicon={false}
            />
                    <IndustriesWeServe images={images}/>
                <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">

             <Hrms2 data={customhrms} heading="Benefits of Our HRM Services" />
                </div>
                </div>

            <div className="about-section style-three py-0 pb-5" data-background="/assets/images/resource/about-bg3.jpg">
                {/* <Scenerios data={scenarios} /> */}
                <Reliability heading="Why Partner With Us" list={reliabilitylist} />
            </div>
            {/* <Faq leftdata={service_Faq1} rightdata={service_Faq1_2} /> */}
            <Cta
                title="Get Started With Smart HRM"
                para="Whether you want to automate HR through software, outsource HR operations, or adopt a combined approach, we have the right solution for you."
                buttons={{ btn1: { label: "Get in Touch", link: calendlyAction } }}
                sideicon={false}
            />


        </div>
    );
}

export default HrmsContainer