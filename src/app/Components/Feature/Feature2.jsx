"use client";
import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Feature2 = ({ data, heading, btn }) => {
  // useEffect(() => {
  //   loadBackgroudImages();
  // }, []);

  return (
    <div
      className="feature-section style-two"
      style={{
        backgroundImage: `url('/assets/images/resource/feature-bg2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    {/* <div
      className="feature-section style-two"
      data-background="/assets/images/resource/feature-bg2.jpg"
    > */}
      <div className="container">
        <div className="row dream-bg">
          <div className="col-lg-12">
            <div className="dexon-section-title white padding-lg text-center">
              <SectionTitle Title={heading}></SectionTitle>
            </div>
          </div>
          <div className="dream-shape2">
            <Image
              src="/assets/images/resource/shape2.png"
              alt={heading}
              width={43}
              height={43}
            />
          </div>
        </div>

        {/* 🔹 Feature Boxes */}
        <div className="row justify-content-center">
          {data?.map((item, i) => {
            // 👇 condition for Bootstrap column size
            const colClass =
              data.length === 4
                ? "col-lg-6 col-md-6"
                : data.length === 5
                  ? "col-lg-4 col-md-6"
                  : "col-lg-4 col-md-6"; // default fallback

            return (
              <div key={i} className={colClass}>
                <div className={`feature-single-box  pt-3 `} style={data.length === 4 ? { height: "350px" } : {}}>
                  <div className="feature-content mt-0">
                    <h2>{item.heading}</h2>
                    {item?.time && <p>{item.time}</p>}
                    <ul>
                      {item.list?.map((list, idx) => (
                        <li key={idx}>{list}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🔹 Buttons */}
        {btn && (
          <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap p-3">
            {btn.btnname.map((name, idx) => (
              <button
                key={idx}
                className="rounded-2 px-5 py-2 bg-transparent featurebtn"
                onClick={btn.btnlink}
              >
                {name}
                <i className="bi bi-arrow-right-short ms-2"></i>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feature2;
