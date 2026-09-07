"use client";
import Link from "next/link";
import React from "react";

const LeadMagnets = ({ items }) => {
  return (
    <section className="py-5 mt-3" style={{ background: "#0d0d0d" }}>
      <div className="container text-light">
        <div className="row justify-content-center bg-dark rounded-5 py-5 text-center">
          {items?.data?.map((item, index) => (
            <div
              key={index}
              className={`col-md-12 col-lg-3 ${
                index !== items.data.length - 1
                  ? "border-end border-secondary"
                  : ""
              }`}
            >
              <Link href={items?.link} className="text-decoration-none text-white">
                <div className="resource-card p-4 h-100 bg-dark">
                  <p
                    className="mb-3 lh-lg"
                    dangerouslySetInnerHTML={{
                      __html: `<strong>${item}</strong>`,
                    }}
                  ></p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnets;
