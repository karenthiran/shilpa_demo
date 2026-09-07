import React from 'react'

const Hrms = ({data,heading}) => {
    return (
        <>
            <div className="row ">
                <h2 className='mb-5'>{heading}</h2>
                {data?.map((item, i) => (
                    <div key={i} className="col-lg-3 col-md-6 border ">
                        <div className="feature-single-box feature-height border">
                            <div className="feature-content">
                                <h2 >{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Hrms