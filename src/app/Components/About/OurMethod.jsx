import Link from 'next/link'
import React from 'react'

const OurMethod = ({data1,data2,heading}) => {
    return (
        <>
            <div className="about-section  relative" data-background="/assets/images/resource/about-bg3.jpg">
                <div className="container">
                    <div className="row ">
                        <h2 className='my-5'>{heading}</h2>
                        {data1?.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 ">
                                <div className="feature-single-box feature-height ">
                                    <div className="feature-content ">
                                        <h2 >{item.heading}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {data2?.map((item, i) => (
                            <div key={i} className="col-lg-12 col-md-12">
                                <div className="method-single-box  d-lg-flex justify-content-between align-items-center">
                                    <div className=" d-lg-flex  align-items-center justify-content-start  w-75">
                                        <h2 className='' >{item.heading}</h2>
                                        <p className=' mt-4 ms-lg-4 '>{item.desc}</p>
                                    </div>
                                    <div className='hero-button'>
                                        <button onClick={item.btnLink} className='bg-dark text-white px-5 py-lg-2 py-2 rounded border-0'>{item.btn}<i className="bi bi-arrow-right-short ms-2 "></i></button>
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

export default OurMethod