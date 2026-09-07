import Link from 'next/link'
import React from 'react'

const HomeResources = () => {
  return (
    <>
    <section className="py-5" style={{background: "#0d0d0d"}}>
  <div className="container text-light ">
    <div className="row justify-content-center text-center mb-5">
      <div className="col-lg-8">
        <h2 className="fw-bold text-white">Resources</h2>
        
      </div>
    </div>

    <div className="row  justify-content-center bg-dark rounded-5 py-5 text-center">
      {/* <!-- HRMS --> */}
      <Link href="/hrms" className="col-md-12 col-lg-3 ">
      <div className='text-white' >
        <div className="resource-card p-4 h-100 k border-end border-secondary ">
          <p className="mb-3 lh-lg">
            <strong>HRMS:</strong><br /> Global Payroll Readiness <br/> Checklist
          </p>
        
        </div>
      </div>
      </Link>

      {/* <!-- ISO --> */}
     <Link href="/hrms" className="col-md-12 col-lg-3 ">
      <div className='text-white' >
        <div className="resource-card p-4 h-100 bg-dark border-end border-secondary">
          <p className="mb-3 lh-lg">
            <strong>ISO:</strong> <br /> ISO 9001 Internal <br/>Audit Plan
          </p>
          
        </div>
      </div>
      </Link>

      {/* <!-- Training --> */}
      <Link href="/hrms" className="col-md-12 col-lg-3 ">
      <div className='text-white' >
        <div className="resource-card p-4 h-100 bg-dark border-end border-secondary">
          <p className="mb-3 lh-lg">
            <strong>Training:</strong> <br />TNA (Training Needs Analysis) Template 
          </p>
         
        </div>
      </div>
      </Link>

      {/* <!-- Security --> */}
       <Link href="/hrms" className="col-md-12 col-lg-3 ">
      <div className='text-white' >
        <div className="resource-card p-4 h-100 bg-dark">
          <p className="mb-3 lh-lg">
            <strong>Security:</strong> <br />Security SOP Starter<br/> Kit 
          </p>
         
        </div>
      </div>
      </Link>
    </div>  

  </div>
</section>

    </>
  )
}

export default HomeResources