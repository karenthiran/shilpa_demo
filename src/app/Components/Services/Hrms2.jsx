import React from 'react'

const Hrms2 = ({ data, heading }) => {
  return (
    <>
      <h2 className="mb-5">{heading}</h2>

      <div className="hrms-grid">
        {data?.map((item, i) => (
          <div key={i} className="feature-single-box feature-height">
            <div className="feature-content h-100 d-flex flex-column">
              <h2>{item.title}</h2>
              <p className="flex-grow-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Hrms2
