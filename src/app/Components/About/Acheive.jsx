import Image from "next/image";
import Link from "next/link";

const Acheive = ({
  mainimage,
  title1,
  listItem,
  btnName,
  btnUrl,
  decorative,
  collageImages,
}) => {
  return (
    <div className="row about-bg align-items-center  ">
      <div className="col-lg-6 ">
        {collageImages?.length ? (
          <div className="about-thumb-collage">
            <div className="collage-top">
              <Image
                src={collageImages[0]}
                alt={title1}
                fill
                sizes="(max-width: 991px) 100vw, 45vw"
                className="collage-img"
              />
            </div>
            <div className="collage-row">
              {collageImages.slice(1, 4).map((src, index) => (
                <div className="collage-item" key={index}>
                  <Image
                    src={src}
                    alt={title1}
                    fill
                    sizes="(max-width: 991px) 33vw, 15vw"
                    className="collage-img"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={`about-thumb${decorative ? " about-thumb-decorative" : ""}`}
          >
            {decorative && (
              <span className="about-thumb-shape" aria-hidden="true"></span>
            )}
            <Image
              src={mainimage}
              alt={title1}
              width={513}
              height={485}
              className={decorative ? "about-thumb-img" : undefined}
            />
          </div>
        )}
      </div>
      <div className="col-lg-6 mt-md-5 mt-lg-0">
        <div className="dexon-section-title">
          <h2>{title1}</h2>
        </div>
        <div className="about-item-list mt-4">
          <ul>
            {listItem?.map((item, index) => (
              <li key={index}>
                <i className="bi bi-check2-all"></i> {item}{" "}
              </li>
            ))}
          </ul>
        </div>
        {btnName && (
          <div className="about-button2">
            <Link href={btnUrl} className="dexon-button">
              {btnName} <i className="bi bi-arrow-right-short"></i>{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Acheive;
