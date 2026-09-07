import Image from "next/image";
import React from "react";

const IndustriesWeServe = ({images}) => {
  return (
    <>
      <div className="testimoonial-section" style={{
        backgroundImage: `url('/assets/images/resource/testi-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className=" industry-bg">
          <h1>Industries We Serve</h1>
          <p>Our HRM solutions are trusted across multiple industries, including:</p>
          <div className=" industry-first  ">
            <p>Startups and Growing Businesses</p>
          </div>
         <div className="d-flex justify-evenly mt-3 w-full gap-2">
  {images?.map((item, index) => (
    <div
      key={index}
      className="industry-images position-relative"
      style={{ width: "208px", height: "248px" }}
    >
      {/* IMAGE */}
      <Image
        src={item.src}
        alt={`industry-${index}`}
        fill
        className="object-cover rounded-4"
      />

      {/* TEXT OVER IMAGE */}
      <p className="position-absolute top-0 start-0 p-3 text-white fw-semibold z-3">
        {item.title}
      </p>
    </div>
  ))}
</div>


        </div>
      </div>
    </>
  );
};

export default IndustriesWeServe;
