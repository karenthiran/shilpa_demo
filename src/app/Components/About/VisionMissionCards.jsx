import Image from "next/image";

const VisionMissionCards = ({
  visionText = "Sri Lanka’s most trusted SME partner for turning standards into everyday practice—clarity, compliance, confidence at every site.",
  missionText = "Simplify compliance · Automate the boring · Build capability · Measure what matters.",
}) => {
  return (
    <div className="container my-5">
      <div className="row g-4 justify-content-center align-items-center">
        {/* Vision Card */}
        <div className="col-12 col-md-12 col-lg-6">
          <div className="card bg-black text-white rounded-4 p-4   VisionMissionCard">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2
                className="fw-semibold text-white"
                style={{ fontSize: "40px" }}
              >
                Our Vision
              </h2>
              <Image
                src="/assets/images/resource/vision.png"
                width={100}
                height={100}
                alt="vision-icon"
              />
            </div>
            <p>{visionText}</p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="col-12 col-md-12 col-lg-6">
          <div className="card bg-black text-white rounded-4 p-4  VisionMissionCard">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2
                className="fw-semibold text-white"
                style={{ fontSize: "40px" }}
              >
                Our Mission
              </h2>
              <Image
                src="/assets/images/resource/mission.png"
                width={100}
                height={100}
                alt="mission-icon"
              />
            </div>
            <p>{missionText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionCards;
