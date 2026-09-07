"use client";
import React from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const StandardsSection = () => {
    const standards = [
        {
            title: "ISO 9001",
            subtitle: "Quality Management",
            link: "#",
        },
        {
            title: "ISO 45001",
            subtitle: "Occupational Health & Safety",
            link: "#",
        },
        {
            title: "ISO 14001",
            subtitle: "Environment",
            link: "#",
        },
        {
            title: "ISO 21001",
            subtitle: "Educational Organizations",
            link: "#",
        },
        {
            title: "ISO 22000 + HACCP/GMP",
            subtitle: "Food Safety + HACCP/GMP",
            link: "#",
        },
    ];

    return (
        <section className="px-3 py-4 bg-white rounded-3">
            <div className="container">
                <div className="row mb-4">
                    {/* Left Column */}
                    <div className="col-lg-4 col-md-12 mb-4  align-items-center d-flex">
                        <div>

                            <h3 className="fw-semibold">Standards We Cover</h3>
                            <p className="text-muted small mb-3">
                                {` Need another standard? Ask us—we'll confirm scope and resources.`}
                            </p>
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            {standards.map((item, index) => (
                                <div className="col-md-6 mb-4" key={index}>
                                    <h6 className="fw-semibold mb-1">{item.title}</h6>
                                    <p className="text-muted small mb-2">{item.subtitle}</p>
                                    <Link
                                        href={item.link}
                                        className=" text-dark standards d-flex  "
                                    >
                                        Learn more <i className="bi bi-arrow-right-short ms-2 "></i>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StandardsSection;
