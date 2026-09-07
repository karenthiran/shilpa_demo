'use client'
import { handleuseCalendly } from '@/app/Components/CalendlyBadge/CalendlyBadge';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Contact from '@/app/Components/Contact/Contact';
import WhatToBring from '@/app/Components/Contact/WhatToBring';
import Cta from '@/app/Components/Cta/Cta';
import Cta2 from '@/app/Components/Cta/Cta2';
import React from 'react';

const ContactContainer = () => {
    const calendlyAction = handleuseCalendly()

    const whatsappAction = () => {
        const whatsappUrl = `https://wa.me/94777640985`;

        window.location.href = whatsappUrl;
    };

    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.webp"
                subTitle="Contact"
                title="Talk to a Human—Today"
                content=" Whether it's HR & Payroll (EPF/ETF/APIT), ISO certification, Training & OBT, or Security SOPs, we'll map your next steps in a brief, focused call."
                button1="Book Free Consultation"
                button2=" Chat on WhatsApp"
                buttons={{ btn1: { label: "Book Free Consultation", link: calendlyAction }, btn2: { label: "Chat on WhatsApp", link: whatsappAction } }}

            />
            <Cta2 />
            <Contact />
            <WhatToBring />
            <Cta
                title=" Ready to get a clear, practical plan?"
                buttons={{ btn1: { label: " Book Free Consultation", link: calendlyAction } }}
                sideicon={false}
            />
        </div>
    );
};

export default ContactContainer;