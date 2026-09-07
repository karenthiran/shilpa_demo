'use client'
import { handleuseCalendly } from '@/app/Components/CalendlyBadge/CalendlyBadge'
import Casestudy from '@/app/Components/CaseStudy/Casestudy'
import BreadCumb from '@/app/Components/Common/BreadCumb'
import Cta from '@/app/Components/Cta/Cta'
import React from 'react'

const CasestudyContainer = () => {
      const calendlyAction = handleuseCalendly()
  return (
    <>
      <BreadCumb
        bgImg="/assets/images/resource/inner-bg.webp"
        subTitle="casestudies"
        title=" Proof You Can Show"
        content="See how SMEs like yours cut payroll time, passed audits on the first attempt, and built stronger teams—without slowing operations."
        button1=" Book a 15-Minute Gap Call"
        button2=" Download the Case Study Pack"
        buttons={{ btn1: { label: "Book a 15-Minute Gap Call", link: calendlyAction }, btn2: { label: "Download the Case Study Pack", link: calendlyAction } }}

      />
      <Casestudy/>
     <Cta
                title="Want a case like this with your logo on it?"
                buttons={{ btn1: { label: " Book a 15-Minute Gap Call", link: calendlyAction }}}
                sideicon={false}
            />
    </>
  )
}

export default CasestudyContainer