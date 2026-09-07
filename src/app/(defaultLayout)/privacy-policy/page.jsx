import PrivacyPolicyContainer from '@/app/Container/PrivacyPolicy/PrivacyPolicyContainer'
import React from 'react'

export const metadata = {
    title: "Privacy Policy | Shilpa Advisors",
    description: "Read how Shilpa Advisors collects, protects, and uses personal data under Sri Lanka's PDPA and global data protection standards.",
};


const page = () => {
  return (
    <>
    <PrivacyPolicyContainer/>
    </>
  )
}

export default page