'use client'
import About3 from '@/app/Components/About/About3';
import CertificationCardStack from '@/app/Components/About/CertificationCardStack';
import Certifications from '@/app/Components/About/Certifications';
import Founder from '@/app/Components/About/Founder';
import OurMethod from '@/app/Components/About/OurMethod';
import VisionMissionCards from '@/app/Components/About/VisionMissionCards';
import {handleuseCalendly}  from '@/app/Components/CalendlyBadge/CalendlyBadge';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Feature3 from '@/app/Components/Feature/Feature3';
import Services2 from '@/app/Components/Services/Services2';
import {  AboutMethodsLower, AboutMethodsUpper } from '@/app/Data/About/OurMethod';
import { whatWeDo } from '@/app/Data/services2';
import React from 'react';

const AboutContainer = () => {
    const Service2HeadingContent = {
        subtitle: 'Improve your Business',
        title: 'What we do',
        Content: ' One partner for growth-ready compliance in Asia: HRMS that fits your rules, ISO systems that pass audits, training that changes behaviour, and security operations that win client confidence. Simple plans, fast rollouts, clean evidence.',
        mainImg: '/assets/images/slider/Home-wedoabout (2).webp'
    }
    const calendlyAction = handleuseCalendly()

    return (
        <div className="about-page">
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.webp"
                subTitle="About Us"
                title="Standards. People. Systems. Growth—Built for Asian SMEs"
                content="We turn standards into daily habits: HRMS Asian (EPF/ETF/APIT), ISO certification Sri Lanka, Training & OBT Kitulgala, and ISO 18788 security "
                buttons={{ btn1: { label: "Book Free Consultation", link: calendlyAction } }}

            />
            <CertificationCardStack/>
            {/* <Certifications/> */}
            <About3 />
            <VisionMissionCards />
            <Feature3 />
            <Services2 headcontent={Service2HeadingContent} data={whatWeDo} />
            <Founder />
            {/* <Certifications/> */}
            <OurMethod heading="Our Method" data1={AboutMethodsUpper} data2={AboutMethodsLower}/>

        </div>
    );
};

export default AboutContainer;