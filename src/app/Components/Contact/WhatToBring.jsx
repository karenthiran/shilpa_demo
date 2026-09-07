import { whatToBring } from '@/app/Data/About/whatToBring'
import React from 'react'

const WhatToBring = () => {
    return (
        <>
            <div className="about-section style-three relative p-0" data-background="/assets/images/resource/about-bg3.jpg">
                {/* <p>about 4</p> */}

                <div className="container">
                    <div className="row ">
                        <h2 className='my-5'>What to Bring</h2>
                        {whatToBring?.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 ">
                                <div className="feature-single-box feature-height">
                                    <div className="feature-content">
                                        <h2 >{item.heading}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatToBring