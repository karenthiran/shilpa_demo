import HrmsContainer from "@/app/Container/Services/HrmsContainer";

export const metadata = {
    title: " HR & Payroll Software for Asian SMEs | Shilpa HRMS",
    description: "Automate recruitment, attendance, payroll, performance & exit for Asian SMEs — with built-in compliance (EPF/ETF/APIT, SOCSO, EIS). Get an integrated HRMS that streamlines your workflows.",
};

const page = () => {
   return(
    <HrmsContainer/>
   )
};

export default page;