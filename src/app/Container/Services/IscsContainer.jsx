'use client'
import Acheive from '@/app/Components/About/Acheive'
import { handleuseCalendly } from '@/app/Components/CalendlyBadge/CalendlyBadge'
import BreadCumb from '@/app/Components/Common/BreadCumb'
import SectionTitle from '@/app/Components/Common/SectionTitle'
import Cta from '@/app/Components/Cta/Cta'
import Faq from '@/app/Components/Faq/Faq'
import Feature2 from '@/app/Components/Feature/Feature2'
import Fix from '@/app/Components/Fix/Fix'
import LeadMagnets from '@/app/Components/Services/LeadMagnets'
import Problem from '@/app/Components/Services/Problem'
import StandardsSection from '@/app/Components/Services/StandardsSection'
import { service_Faq2_1, service_Faq2_2 } from '@/app/Data/questions'
import { Iscs_leadData } from '@/app/Data/service/LeadMagnets'
import { service2 } from '@/app/Data/service/service1'
import { shilpaMethod, shilpaMethodbtn } from '@/app/Data/service/service2method'
import Image from 'next/image'
import React from 'react'

const IscsContainer = () => {
    const about1listItem = [
        "Certification readiness with minimal disruption to operations",
        "Audit-proof documentation (SOPs, forms, registers, records) people actually use",
        "Measurable improvements in quality, safety, and compliance culture",
        "Buyer confidence and faster vendor onboarding"
    ]
    const service2Deliverables = [
        "Policies, SOPs, forms, registers, checklists (editable)",
        "Risk & opportunities register; legal/other requirements matrix",
        "Training slides + attendance records; competency matrix",
        "Internal audit program, audit checklists & reports",
        "CAPA log, NC tracker, management review pack",
        "Pre-audit rehearsal + certification-day script"
    ]
    const calendlyAction = handleuseCalendly()
    return (
        <>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.webp"
                subTitle="Services"
                title="Get ISO-Certified—Fast, Practical, Audit-Ready"
                content="We take Sri Lankan SMEs from Gap → Documentation → Training → Internal Audits → Certification across not limited to ISO 9001, 45001, 22000, 14001, 21001, 39001 (plus HACCP/GMP). Clear deliverables, no last-minute fire drills."
                buttons={{ btn1: { label: " Book ISO Readiness Call ", link: calendlyAction }, btn2: { label: "Book Free Fit-Assessment", link: calendlyAction } }}

            />
            <div className="about-section style-three " data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">
                    <Problem data={service2} />
                    <StandardsSection />
                    <Acheive
                        mainimage="/assets/images/slider/iso-achieve.webp"
                        // mainimage="/assets/images/resource/about.png"
                        title1="WHAT YOU'LL ACHIEVE"
                        listItem={about1listItem}
                        btnName="Download the Sri Lanka Payroll Checklist (PDF)"
                        btnUrl="/iscs-pdf"
                    />
                </div>
            </div>
            <Feature2 data={shilpaMethod} heading="The Shilpa Method" btn={shilpaMethodbtn} />
            <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">

                    <Acheive
                        mainimage="/assets/images/slider/iso-Deliverables.webp"
                        title1="Deliverables "
                        listItem={service2Deliverables}
                        
                    />
                <Fix
                    mainimage="/assets/images/slider/iscs-Why_choose us.png"
                    title1="Why SMEs choose us"
                    listItem={[
                        "Local SME expertise: apparel, retail, services, education, food processing",
                        "Audit-day discipline: We rehearse the audit so there are no surprises",
                        "“Use it daily” documentation: lean templates that match real workflows",
                        "Measurable wins: fewer NCs, faster buyer approval, cleaner handovers"
                    ]}
               
                     />
               
                </div>
            </div>
            <Faq leftdata={service_Faq2_1} rightdata={service_Faq2_2} />
            <Cta
                title=" Ready to pass audit—without the panic?"
                buttons={{ btn1: { label: " Book ISO Readiness Call", link: calendlyAction } }} //, btn2: { label: " Get Sample SOP Pack", link: "#" }
                sideicon={false}
            />
            <LeadMagnets items={Iscs_leadData} />;


        </>
    )
}

export default IscsContainer