import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import Image from 'next/image'
import CounterCard from '../Testimonial/CounterCard'
import Project from '../Project/Project'

const WhyChoose = () => {
    return (
        <>
            <div className="feature-section" data-background="/assets/images/resource/feature-bg.jpg">
                <div className="container">
                    {/*-------- Why choose us------------- */}

                    <div className="row align-items-center  ">
                        <div className="col-lg-6">
                            <div className="dexon-section-title ">
                                <SectionTitle
                                    Title="Why choose us"
                                    Content="One team, four capabilities—tightly integrated"
                                ></SectionTitle>
                            </div>
                            <div className="serviceCard-list ">
                                <ul className="list-unstyled">
                                    <li><i className="bi bi-check2-all gap-4"></i>Unified delivery: HRMS configs align with ISO processes and security SOPs</li>
                                    <li><i className="bi bi-check2-all gap-4"></i>Real adoption: training turns SOPs and HR policies into daily habits</li>
                                    <li><i className="bi bi-check2-all gap-4"></i>Audit-ready: reports, trails, and templates that survive real audits</li>
                                    <li><i className="bi bi-check2-all gap-4"></i>Faster time-to-value: planned rollouts with measurable milestones</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-thumb2">
                                <Image src="/assets/images/slider/Home-chooseus.webp" alt="Home-chooseus" width={521} height={521} />
                                <div className="about-shape">
                                    <Image src="/assets/images/resource/shape-2.png" alt="Home-chooseus2" width={46} height={46} />
                                </div>
                            </div>
                        </div>
                        {/*--------- Results / Counters -------------*/}

                        <div className="col-lg-12 mt-4">
                            <div className="about-counter-style ">
                                <div className="row">
                                    <CounterCard
                                        number="50"
                                        content="HRMS payroll cycles"
                                    />
                                    <CounterCard
                                        number="70"
                                        content="ISO certifications supported"
                                    />
                                    <CounterCard
                                        number="70"
                                        content="Workshops & offsites "
                                    />
                                    <CounterCard
                                        number="70"
                                        content="Security sites & events "
                                    />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                 <Project/>
            </div>
        </>
    )
}

export default WhyChoose