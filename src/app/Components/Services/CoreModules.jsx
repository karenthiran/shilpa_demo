import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import Image from 'next/image'
import data2 from '../../Data/coremodules.json';

const CoreModules = () => {
    return (
        <>
            <div className="row dream-bg my-5 ">
                <div className="col-lg-12">
                    <div className="dexon-section-title ">
                        <SectionTitle
                            Title="Our HR Outsourcing Offerings"
                        ></SectionTitle>
                    </div>
                </div>
                <div className="dream-shape mt-5">
                    <Image src="/assets/images/resource/border2.png" alt="core-module-circle" width={774} height={172} />
                </div>

            </div>

            <div className="row d-flex justify-content-center mt-lg-5 pt-lg-5  ">
                {data2?.map((item, i) => (
                    <div key={i} className="col-lg-6 col-md-12  ">
                        <div className="coremodules px-3 mt-lg-2  " style={data2.length === 4 ? { height: "300px" } : {height: "250px"}}>
                            <div className="feature-content">
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <p>{item.desc2}</p>
                                {/* <div className='dexon-button d-flex text-dark  justify-content-center '>
                                    <p >{item.cta}<i className="bi bi-arrow-right-short"></i></p>

                                </div> */}

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CoreModules