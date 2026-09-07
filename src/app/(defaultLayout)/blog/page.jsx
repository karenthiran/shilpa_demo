import BlogGrid from '@/app/Components/Blog/BlogGrid';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

export const metadata = {
    title: " Insights on HR, ISO & SME Growth | Shilpa Advisors Blog",
    description: "Latest articles and insights on HR software, ISO standards, employee training, and SME growth strategies from Shilpa Advisors experts.",
};

const page = () => {

    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.webp"
                subTitle="Blog Grid"
                title=" Insights for Asian SMEs"
                content="Short, practical posts on HR & Payroll (EPF/ETF/APIT), ISO, Training & OBT, and Private Security—built to use the same day."
                button1=" Download Starter Pack"
            />
            <BlogGrid/>
        </div>
    );
};

export default page;