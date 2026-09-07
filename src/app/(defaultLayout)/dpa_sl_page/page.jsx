"use client";
import React from "react";

export default function page() {
  return (
    <section className="bg-light text-dark py-5 px-4 px-lg-5 mt-5">
      <div className="container-lg">
        {/* HEADER */}
        <h2 className="fw-bold  mb-3">
          Data Processing Addendum (DPA-SL)
        </h2>
        <p className="text-muted small mb-4">
          <strong>For:</strong> HRMS (SaaS) — Shilpa Advisors&nbsp;|&nbsp;
          <strong>Version:</strong> 1.0&nbsp;|&nbsp;
          <strong>Effective date:</strong> [●]
        </p>

        <p className="mb-5">
          This Data Processing Addendum (“DPA”) forms part of the Master
          Services Agreement / Subscription Order / Terms (the “Agreement”)
          between <strong>[Client Legal Name]</strong> (“Controller”) and{" "}
          <strong>Shilpa Advisors</strong> (“Processor”) for use of Shilpa
          Advisors HRMS (the “Services”).
        </p>

        {/* MAIN CLAUSES */}
        <div className="d-flex flex-column gap-5">
          {/* 1 */}
          <div>
            <h2 className="h4 fw-semibold  mb-3">
              1. Roles, Scope, and Order of Precedence
            </h2>
            <ul className="ms-3">
              <li>
                <strong>1.1 Roles.</strong> For HRMS employee data, Client is the
                Controller and Shilpa Advisors is the Processor under Sri
                Lanka’s PDPA.
              </li>
              <li>
                <strong>1.2 Scope.</strong> Processor will process personal data
                solely to provide, secure, and support the Services as described
                in Annex I.
              </li>
              <li>
                <strong>1.3 Precedence.</strong> If this DPA conflicts with the
                Agreement, this DPA governs data-protection matters.
              </li>
            </ul>
          </div>

          {/* 2 */}
          <div>
            <h2 className="h4 fw-semibold  mb-3">
              2. Controller Instructions
            </h2>
            <ul className="ms-3">
              <li>
                Processor will process personal data only on documented
                instructions from the Controller.
              </li>
              <li>
                Processor will promptly inform Controller if an instruction
                appears unlawful.
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="h4 fw-semibold  mb-3">
              3. Confidentiality & Personnel
            </h2>
            <ul className="ms-3">
              <li>
                Processor ensures all personnel with access to data are bound by
                confidentiality and trained in data protection.
              </li>
              <li>
                Access is limited strictly to personnel with a need-to-know
                basis.
              </li>
            </ul>
          </div>

          {/* 4–13 (shorter points) */}
          {[
            {
              title:
                "4. Security (Technical & Organisational Measures)",
              text: "Processor maintains appropriate TOMs (see Annex II) including role-based access, encryption, backups, and incident response.",
            },
            {
              title: "5. Sub-Processors",
              text: "Controller authorises the sub-processors listed in Annex III. Processor will impose equivalent data-protection terms and notify Controller of any material changes.",
            },
            {
              title: "6. Assistance to Controller",
              text: "Processor will assist with data-subject requests, DPIAs, and provide documentation demonstrating compliance.",
            },
            {
              title: "7. Personal Data Breaches",
              text: "Processor will notify Controller without undue delay of any breach and share incident details and mitigation steps.",
            },
            {
              title: "8. International Transfers",
              text: "Processor will apply safeguards consistent with PDPA for cross-border data transfers and identify the hosting regions upon request.",
            },
            {
              title: "9. Return & Deletion of Data",
              text: "Data can be exported anytime. Upon termination, Processor deletes personal data within 60 days (subject to legal retention).",
            },
            {
              title: "10. Audits",
              text: "Controller may request compliance evidence annually or post-incident, under confidentiality.",
            },
            {
              title: "11. Liability & Indemnity",
              text: "Liability aligns with the Agreement, except as prohibited by law.",
            },
            {
              title: "12. Term & Termination",
              text: "This DPA remains in force while data is processed. Confidentiality and deletion terms survive termination.",
            },
            {
              title: "13. Governing Law & Venue",
              text: "This DPA is governed by the laws of Sri Lanka, under the exclusive jurisdiction of the courts of Colombo.",
            },
          ].map((item, idx) => (
            <div key={idx}>
              <h2 className="h4 fw-semibold  mb-2">
                {item.title}
              </h2>
              <p>{item.text}</p>
            </div>
          ))}

          {/* ANNEX I */}
          <div className="mt-5">
            <h2 className="h3 fw-bold  mb-4">
              Annex I — Data & Processing Details
            </h2>
            <div className="table-responsive">
              <table className="table table-bordered table-sm">
                <tbody>
                  <tr className="table-light fw-semibold">
                    <td className="w-25">Subject Matter & Duration</td>
                    <td>
                      Processing of HRMS employee data during subscription term
                      plus backup retention.
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">Nature & Purpose</td>
                    <td>
                      Provision, operation, and support of HRMS including
                      authentication, attendance, payroll, payslips, and
                      compliance exports.
                    </td>
                  </tr>
                  <tr className="table-light">
                    <td className="fw-semibold">Types of Personal Data</td>
                    <td>
                      Employee master data, attendance logs, payroll data
                      (earnings, deductions, EPF/ETF/APIT), documents (payslips,
                      bank files), and access logs.
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">
                      Categories of Data Subjects
                    </td>
                    <td>
                      Employees, contractors, trainees, and limited
                      administrators of the Controller.
                    </td>
                  </tr>
                  <tr className="table-light">
                    <td className="fw-semibold">Controller Obligations</td>
                    <td>
                      Maintain lawful basis, employee transparency, configure
                      HRMS policies, and verify payroll outputs.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ANNEX II */}
            <h2 className="h3 fw-bold  mt-5 mb-3">
              Annex II — Technical & Organisational Measures (TOMs)
            </h2>
            <div className="table-responsive">
              <table className="table table-bordered table-sm">
                <thead className="table-light">
                  <tr>
                    <th className="w-25">Control Area</th>
                    <th>Measures Implemented</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Access Controls", "Role-based access, least privilege, strong passwords, session timeouts, MFA (if enabled)."],
                    ["Encryption", "TLS 1.2+ in transit; AES-256 at rest; managed via cloud KMS."],
                    ["Network Security", "Segmented VPC, firewall/WAF, regular patching, secret management, code review."],
                    ["Data Integrity & Availability", "Daily encrypted backups; tested restores; RPO ≤ 24h, RTO ≤ 8h; DR runbooks."],
                    ["Logging & Monitoring", "Centralized logs (access, admin, auth); anomaly alerts; NTP time-sync."],
                    ["Vendor Management", "Sub-processor DPAs; regional data hosting; annual reviews."],
                    ["Personnel & Training", "Confidentiality agreements; onboarding/offboarding; annual security awareness."],
                    ["Physical Security", "Cloud data-center controls (ISO 27001, SOC 2); no on-prem processing."],
                    ["Incident Management", "Vulnerability scanning, remediation SLAs, playbooks, post-mortems for P1 incidents."],
                    ["Privacy by Design", "Data minimization, configurable retention, anonymised test data, masking."],
                  ].map(([a, b], i) => (
                    <tr key={i} className={i % 2 === 1 ? "table-light" : ""}>
                      <td className="fw-semibold">{a}</td>
                      <td>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ANNEX III */}
            <h2 className="h3 fw-bold  mt-5 mb-3">
              Annex III — Sub-Processor Register
            </h2>
            <div className="table-responsive">
              <table className="table table-bordered table-sm">
                <thead className="table-light">
                  <tr>
                    <th>Sub-Processor</th>
                    <th>Service / Role</th>
                    <th>Data Processed</th>
                    <th>Primary Region</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AWS (EC2/RDS/S3)</td>
                    <td>Hosting, databases, object storage</td>
                    <td>HRMS data, logs, backups</td>
                    <td>ap-south-1 / ap-southeast-1</td>
                  </tr>
                  <tr className="table-light">
                    <td>SendGrid / Mailgun</td>
                    <td>Transactional email delivery</td>
                    <td>Recipient email, metadata</td>
                    <td>Global</td>
                  </tr>
                  <tr>
                    <td>Vercel</td>
                    <td>Marketing site / blog hosting</td>
                    <td>IP, HTTP metadata</td>
                    <td>Global edge</td>
                  </tr>
                  <tr className="table-light">
                    <td>Sentry (optional)</td>
                    <td>Error monitoring</td>
                    <td>Pseudonymous logs</td>
                    <td>EU / US</td>
                  </tr>
                  <tr>
                    <td>WhatsApp Gateway (optional)</td>
                    <td>Notifications / support</td>
                    <td>Phone numbers, message metadata</td>
                    <td>EU / US</td>
                  </tr>
                  <tr className="table-light">
                    <td>Google Analytics (GA4)</td>
                    <td>Website analytics</td>
                    <td>Cookie IDs, truncated IPs</td>
                    <td>Global</td>
                  </tr>
                </tbody>
              </table>
              <p className="small text-muted mt-2">
                <strong>Change Management:</strong> Updates will be posted at{" "}
                <code>/legal/subprocessors</code> with prior notice to HRMS
                customers for objection rights as applicable.
              </p>
            </div>

            {/* ANNEX IV */}
            <h2 className="h3 fw-bold  mt-5 mb-3">
              Annex IV — Incident Notification Template
            </h2>
            <div className="table-responsive">
              <table className="table table-bordered table-sm">
                <thead className="table-light">
                  <tr>
                    <th className="w-25">Field</th>
                    <th>Details / Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Time Discovered / Contained", "[Insert timestamps and detection summary]"],
                    ["Systems Affected", "[Modules or regions impacted]"],
                    ["Nature of Incident", "[Confidentiality / Integrity / Availability issue]"],
                    ["Data Types & Volume", "[Categories and approximate record count]"],
                    ["Consequences", "[Likely impact on individuals or Controller]"],
                    ["Measures Taken", "[Technical / organisational mitigation actions]"],
                    ["Recommended Controller Actions", "[Any follow-up required by Controller]"],
                    ["Next Update Schedule", "[Date/time for further updates until closure]"],
                  ].map(([a, b], i) => (
                    <tr key={i} className={i % 2 === 1 ? "table-light" : ""}>
                      <td className="fw-semibold">{a}</td>
                      <td>{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
