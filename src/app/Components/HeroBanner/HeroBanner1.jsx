"use client";
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";
import { CgPlayButtonO } from "react-icons/cg";

const HeroBanner1 = ({
  bgmage,
  Title1,
  Title2,
  content,
  heroShape1,
  heroShape2,
  buttons,
}) => {
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   loadBackgroudImages();
  // }, []);

  // ✅ Extract YouTube video ID
  const getYouTubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(buttons?.btn2?.link);

  return (
    <>
      {/* <div
        className="hero-section d-flex align-items-center"
        data-background={bgmage}
      > */}
      <div
        className="hero-section d-flex align-items-center"
        style={{
          backgroundImage: `url(${heroShape2})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#101210",
        }}
      >
        <div className="container-fluid">
          <div className="row hero-bg ">
            <div className="col-lg-12 mx-2 mx-lg-5">
              <div className="hero-content d-flex gap-2 ">
                <div className="col-lg-9 ">
                  {Title1 && <h1 className="">{Title1}</h1>}
                  {Title2 && (
                    <h2 className="">
                      {Title2}
                      <span className="d-none d-lg-inline">
                        <Image
                          src="/assets/images/slider/shap4.png"
                          width={200}
                          height={100}
                          alt="shape"
                        />
                      </span>
                    </h2>
                  )}

                  <div className="hero-content-text-btn ">
                    <Image
                      src="/assets/images/slider/hero-arrow.png"
                      alt="arrow-image"
                      width={1350}
                      height={50}
                      className="d-flex justify-content-start"
                    />
                    <p>{content}</p>

                    <div className="hero-button">
                      <div
                        className={`d-flex gap-4 mt-4 flex-wrap hero-button ${
                          buttons.btn2
                            ? "justify-content-start"
                            : "justify-content-center"
                        }`}
                      >
                        {/* Button 1 */}
                        {buttons.btn1?.label && (
                          <button
                            onClick={buttons.btn1?.link || "#"}
                            className="rounded-2 bg-black text-white px-md-5 px-4 py-1 py-md-2 border-0"
                          >
                            {buttons.btn1.label}
                            <i className="bi bi-arrow-right-short ms-2"></i>
                          </button>
                        )}

                        {/* ✅ Button 2 — YouTube Popup */}
                        {buttons.btn2?.label && (
                          <button
                            onClick={() => setShowModal(true)}
                            className="btn btn-outline-light text-white px-md-5 px-3 py-0 py-md-2 border-0"
                          >
                            {buttons.btn2.label}
                            <CgPlayButtonO className="fs-4 ms-2" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hero right images */}
                <div className="col-lg-3 hero-all-images d-none d-lg-block ">
                  <div className="position-absolute hero-all-images1">
                    <Image
                      src={heroShape1}
                      alt="heroShape1"
                      width={300}
                      height={150}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Video Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}
          tabIndex="-1"
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark border-0">
              <div className="modal-body p-0 position-relative">
                <button
                  type="button"
                  className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                  onClick={() => setShowModal(false)}
                ></button>

                {videoId ? (
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <p className="text-white text-center p-5">
                    Invalid YouTube link
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroBanner1;
