import React from 'react'


const Scenerios = ({data}) => {
    return (
        <>
            <div className="container"  >

                {/* ---REAL-WORLD SCENARIOS-------- */}

                <div className="row ">
                    <h2 className='my-5 text-center text-lg-start'>REAL-WORLD SCENARIOS</h2>

                    {data?.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6 ">
                            <div className="feature-single-box feature-height">
                                <div className="feature-content">
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Scenerios