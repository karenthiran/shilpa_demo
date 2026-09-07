import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Reliability = ({ heading, para, list }) => {
  return (
    <>
      <div className="container"  >
        <div className="row bg-white rounded-5 px-5 py-4 ">
          {/*----------- SECURITY & RELIABILITY--------------- */}

          <div className='col-lg-6  security-realiabilty'>
            <h2>{heading}</h2>
            {para && <p className='mt-3'>{para}</p>}
            {list &&
              <ul className="mt-3">
                {list.map((item, index) => <li key={index}>{item}</li>)}
              </ul>

            }



          </div>
          <div className='col-lg-6 mt-2 mt-lg-0'>
            <Image src="/assets/images/slider/hrms-reliability.svg" alt="security-realiabilty-img" width={200} height={200} className='reliability-img ' />

          </div>

        </div>
      </div>
    </>
  )
}

export default Reliability