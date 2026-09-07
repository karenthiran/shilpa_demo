import { handleuseCalendly } from "@/app/Components/CalendlyBadge/CalendlyBadge"

export const AboutMethodsUpper = [
    {
        heading: "Free Gap Call",
        desc:"goal, scope, timeline"
    },
    {
        heading: "Roadmap",
        desc:"owners, deliverables, success measures"
    },
    {
        heading: "Execution",
        desc:"docs, setups, training, internal audits / HRMS config"
    },
    {
        heading: "Go-Live /Certification",
        desc:"pass audit, run payroll, close loops"
    },
   
]
 const calendlyAction = handleuseCalendly()
export const AboutMethodsLower = [
     {
        heading: "Quarterly Improvement:",
        desc:"Tune KPIs/reports; surveillance prep",
        btn:"Get Started",
        btnLink:calendlyAction
    },
]