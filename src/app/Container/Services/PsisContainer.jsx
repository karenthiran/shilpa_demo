'use client'
import Acheive from '@/app/Components/About/Acheive'
import { handleuseCalendly } from '@/app/Components/CalendlyBadge/CalendlyBadge'
import BreadCumb from '@/app/Components/Common/BreadCumb'
import Cta from '@/app/Components/Cta/Cta'
import Faq from '@/app/Components/Faq/Faq'
import Feature2 from '@/app/Components/Feature/Feature2'
import Fix from '@/app/Components/Fix/Fix'
import LeadMagnets from '@/app/Components/Services/LeadMagnets'
import Problem from '@/app/Components/Services/Problem'
import Scenerios from '@/app/Components/Services/Scenerios'
import Services2 from '@/app/Components/Services/Services2'
import { service_Faq4_1, service_Faq4_2 } from '@/app/Data/questions'
import { Psis_leadData } from '@/app/Data/service/LeadMagnets'
import { scenarios, service4scenarios } from '@/app/Data/service/scenerios'
import { service4 } from '@/app/Data/service/service1'
import { Scope_of_Support, Scope_of_Supportbtn, shilpaMethod } from '@/app/Data/service/service2method'
import { howitwork, } from '@/app/Data/services2'
import React from 'react'

const PsisContainer = () => {
    const about1listItem = [
        "Consistent guard-room operations across sites",
        "Faster client audits with clean, current documentation and records",
        "Predictable incident response with clear escalation and reporting",
        "Better SLAs & retention through measured quality and readiness"
    ]
    const Service2HeadingContent = {
        subtitle: 'Improve your Business',
        title: 'How It Works',
        Content: 'We start with a site walk-through and gap scan to understand your current setup and identify risks.Then, we build clear SOPs and registers, followed by staff inductions and refresher sessions to align everyone with best practices.Our experts conduct surprise audits to ensure standards hold up on the ground, and we close each cycle with a client-facing review — sharing dashboards, lessons learned, and a forward plan for the next quarter.',

        // mainImg: '/assets/images/resource/servc-thumb.png'
        mainImg: '/assets/images/slider/security-how_it_works.png'
    }
    const calendlyAction = handleuseCalendly()
    return (
        <>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.webp"
                subTitle="Services"
                title="Raise Security Standards—Win Client Confidence, Reduce Risk"
                content=" We help Sri Lankan SMEs build guard-force SOPs, run training & drills, standardise incident reporting, and align with buyer programs (CSR/CTPAT-style requirements)—without slowing day-to-day operations."
                button1="Book a Security Compliance Review"
                button2="Get the Guard SOP Starter Pack (Free)"
                buttons={{ btn1: { label: "Book a Security Compliance Review ", link: calendlyAction }, btn2: { label: "Get the Guard SOP Starter Pack (Free)", link: calendlyAction } }}

            />
            <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">
                    <Problem data={service4} />
                    <Acheive
                        mainimage="/assets/images/slider/security-achieve.png"
                        title1="WHAT YOU'LL ACHIEVE"
                        listItem={about1listItem}
                        btnName="Book my site assessment"
                        btnUrl="/psis-pdf"
                    />
                    <Fix
                        mainimage="/assets/images/slider/security-Deliverables.png"
                        title1="Deliverables"
                        listItem={[
                            "Site-specific SOPs & post orders (editable)",
                            "Guard registers & checklists (print + digital)",
                            "Training decks, attendance logs, drill records",
                            "Audit scorecards, CAPA tracker, monthly dashboards",
                            "Client audit day pack (evidence binder + index)",
                        ]}

                    />
                </div>
            </div>
            <Feature2 data={Scope_of_Support} heading="Scope of Support " btn={Scope_of_Supportbtn} />

            <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">
                    <Services2 headcontent={Service2HeadingContent} data={howitwork} />
                    <Scenerios data={service4scenarios} />
                </div>
            </div>

            <Faq leftdata={service_Faq4_1} rightdata={service_Faq4_2} />
            <Cta
                title="Ready to standardise your guard-force and pass audits with confidence?"
                buttons={{ btn1: { label: " Book a Security Compliance Review", link: "#" }, btn2: { label: "Request a Pilot on One Site", link: "#" } }}
                sideicon={false}
            />
            <LeadMagnets items={Psis_leadData} />;


        </>
    )
}

export default PsisContainer