import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Founder = () => {
  return (
    <>
      <div className='container bg-dark p-4'>
        <div className="row align-items-center ">
         <Image src="/assets/images/slider/Founder-Image.svg" alt='founder-image' width={100} height={100} />
        </div>
        <div className="profile-card   ">
          <div className="d-flex  ">
            <span className="arrow text-white"><FaArrowRight /></span>
            <div>
              <h5 className="mb-0">Shilpa Advisors</h5>
              <small>CEO</small>
              <p>
                Aruna Maganaarachchi is the Founder and Chief Executive Officer of Shilpa Advisors (Pvt) Ltd, leading the company with a clear vision to empower Sri Lankan Small and Medium Enterprises (SMEs) through practical, affordable, and internationally recognised business solutions.
                A retired Commander of the Sri Lanka Navy, Aruna combines the discipline and strategic insight acquired during his military career with over twenty years of leadership experience in the private sector. Educated at Wesley College and Royal College, Colombo, he joined the Sri Lanka Navy early in life and retired in 2001 after sustaining injuries related to combat.
                Aruna holds professional qualifications in Human Resource Management, Marketing Management, and Quality Assurance, along with an MBA. He is currently pursuing a Doctor of Business Administration (DBA) to further develop his academic and professional expertise.
                Throughout his extensive career, Aruna has taken on key managerial roles in several leading Sri Lankan business ventures, gaining direct experience across multiple industries. His travels and close engagement with businesses across the island inspired him to establish Shilpa Advisors, an organisation dedicated to simplifying administrative and operational challenges faced by SMEs and guiding them towards international recognition.
                As a leader, Aruna is recognised for his personal involvement and practical approach. He directly interacts with clients through regular site visits and consultations, ensuring tangible results and measurable improvements. His expertise covers Human Resource Management, Corporate Training, ISO Certification Support, Physical Security Solutions, and CSR Audit Preparation (including WRAP, CTPAT, and related standards), as well as large-scale event coordination.
                Under his leadership, Shilpa Advisors continues to uphold its mission of empowering enterprises, inspiring excellence, and building trust through knowledge, integrity, and continual improvement.              </p>
            </div>

          </div>



          <div className='row'>
            <div className='col-sm-12 '>
              <div className="d-flex flex-sm-col gap-3 mt-4 justify-content-center">


                <Link
                  href="https://www.instagram.com/shilpaadvisors/"
                  className="social-btn"
                  target="_blank"
                >
                  INSTAGRAM
                </Link>

                <Link
                  href="https://www.facebook.com/profile.php?id=61582926632387"
                  className="social-btn"
                  target="_blank"
                >
                  FACEBOOK
                </Link>

                <Link
                  href="https://linktr.ee/ShilpaAdvisors"
                  className="social-btn"
                  target="_blank"
                >
                  LINKTREE
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Founder