import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import Image from 'next/image'

const WhySmeChoose = () => {
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
                                <Image src="/assets/images/resource/about2.png" alt="WhySmeChoose-shape" width={521} height={521} />
                                <div className="about-shape">
                                    <Image src="/assets/images/resource/shape-2.png" alt="WhySmeChoose-shape2" width={46} height={46} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhySmeChoose