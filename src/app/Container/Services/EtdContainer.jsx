'use client'
import { handleuseCalendly } from '@/app/Components/CalendlyBadge/CalendlyBadge'
import BreadCumb from '@/app/Components/Common/BreadCumb'
import Faq from '@/app/Components/Faq/Faq'
import Feature2 from '@/app/Components/Feature/Feature2'
import Hrms from '@/app/Components/Services/Hrms'
import Problem from '@/app/Components/Services/Problem'
import { service_Faq3_1, service_Faq3_2 } from '@/app/Data/questions'
import { DeliveryOptions, Outcomes } from '@/app/Data/service/Hrms'
import { service3 } from '@/app/Data/service/service1'
import {  Progra_Tracks, Progra_Tracksbtn } from '@/app/Data/service/service2method'
import React from 'react'
import Fix from '@/app/Components/Fix/Fix'

const EtdContainer = () => {
        const calendlyAction = handleuseCalendly()
    return (
        <>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.webp"
                subTitle="Services"
                title="Practical Training that Changes On-the-Job Behaviour"
                content=" From leadership & supervisory skills to ISO awareness/internal auditor, OHS (45001), and team building via OBT at Kitulgala—programs built for Sri Lankan SMEs, delivered in EN/SI/TA, and measured for impact."
                buttons={{  btn2: { label: "Book a Training Needs Call", link: calendlyAction } }}

            />
            <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">
                    <Problem data={service3} />
                    <Fix
                    mainimage="/assets/images/slider/etd-How _We _Make.webp"
                    title1="How We Make Training Stick"
                    listItem={[
                        "TNA (Training Needs Analysis) - quick discovery with managers to define behaviours and KPIs",
                        "Design - contextual case studies, role plays, audit/drill simulations",
                        "Delivery - interactive workshops (EN/SI/TA), on-site or off-site/OBT",
                        "On-the-Job Practice - micro-tasks, observation checklists, supervisor coaching",
                        "Follow-Through - 30•60•90-day check-ins; mini-audits; refresher micro-sessions"
                    ]}
               
                     />
                </div>
            </div>
            <Feature2 data={Progra_Tracks} heading="Program Tracks "  btn={Progra_Tracksbtn} />
            <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">
                    <div className="row align-items-center ">
                        <Hrms data={DeliveryOptions} heading="Delivery Options & Logistics" />

                    </div>
                </div>
            </div>
            <Faq leftdata={service_Faq3_1} rightdata={service_Faq3_2} />
        </>
    )
}

export default EtdContainer