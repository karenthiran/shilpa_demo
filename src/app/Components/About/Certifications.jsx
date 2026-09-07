'use client';
import React, { useEffect, useState } from 'react'
import SectionTitle from '../Common/SectionTitle'
import Image from 'next/image'

const Certifications = () => {
    const [isFluid, setIsFluid] = useState();

  useEffect(() => {
    const handleResize = () => {
      setIsFluid(window.innerWidth < 1580); 
    };

    handleResize(); // first render pe check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
    return (
        <>

            {/* <div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg"> */}
            <div className="about-section style-three relative" style={{
                backgroundImage: `url('/assets/images/resource/about-bg3.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
               <div className={isFluid ? 'container-fluid' : 'container'}>

                    {/* //section title */}
                    <div className="row dream-bg my-5 ">
                        <div className="col-lg-12">
                            <div className="dexon-section-title ">
                                <SectionTitle
                                    Title="CERTIFICATIONS & ACCREDITATIONS"
                                ></SectionTitle>
                            </div>
                        </div>
                        <div className="dream-shape mt-5">
                            <Image src="/assets/images/resource/border2.png" alt="core-module-circle" width={774} height={172} />
                        </div>

                    </div>


                    <div className='certification-wrapper '>
                        <div className="curve-image d-xl-block d-none">
                            <Image
                                src="/assets/images/resource/certification.png"
                                alt="certification curve"
                                // fill
                                width={991}
                                height={408}
                                className="curve-img"

                            />
                        </div>
                        <div className='d-flex row px-5 h-100'>
                            <div className='col-lg-4  d-flex align-items-end px-5'>
                                <div className=' '>
                                    <div className='d-flex align-items-end gap-2'>
                                        <h3>HR Certification</h3>
                                        <Image
                                            src="/assets/images/resource/1.png"
                                            alt="3"
                                            width={59}
                                            height={90}
                                        />
                                    </div>
                                    <p>Certified in modern human resource management practices, workforce development, and organizational compliance.</p>
                                </div>
                            </div>
                            <div className='col-lg-4  d-flex align-items-center mt-5'>
                                <div className=' mt-5'>
                                    <div className='d-flex align-items-end gap-2'>
                                        <h3>ISO Certification</h3>
                                        <Image
                                            src="/assets/images/resource/2.png"
                                            alt="3"
                                            width={59}
                                            height={140}
                                        />
                                    </div>
                                    <p>Certified in international standards implementation, quality management, and process optimization frameworks.</p>
                                </div>
                            </div>
                            <div className='col-lg-4  d-flex align-items-start mt-3'>
                                <div className='mt-5  '>
                                    <div className='d-flex align-items-end gap-2'>
                                        <h3>ISO Certification</h3>
                                        <Image
                                            src="/assets/images/resource/3.png"
                                            alt="3"
                                            width={59}
                                            height={140}
                                        />
                                    </div>
                                    <p>Certified in organizational security systems, risk management, and data protection best practices.</p>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* end */}
                </div>


            </div>

        </>
    )
}

export default Certifications