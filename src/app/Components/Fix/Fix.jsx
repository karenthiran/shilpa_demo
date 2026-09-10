import Image from "next/image";
import Link from "next/link";

const Fix = ({
  mainimage,
  title1,
  listItem,
  btnName,
  btnUrl,
  collageImages,
}) => {
  return (
    <div className="row about-bg align-items-center mt-5 mt-lg-4">
      <div className="col-lg-6">
        <div className="dexon-section-title">
          <h2>{title1}</h2>
        </div>
        <div className="about-item-list mt-lg-3">
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
      <div className="col-lg-6 ">
        {collageImages?.length ? (
          <div className="about-thumb-collage-vertical">
            <div className="collage-side">
              <Image
                src={collageImages[0]}
                alt={title1}
                fill
                sizes="(max-width: 991px) 45vw, 22vw"
                className="collage-img"
              />
            </div>
            <div className="collage-col">
              {collageImages.slice(1, 4).map((src, index) => (
                <div className="collage-item-v" key={index}>
                  <Image
                    src={src}
                    alt={title1}
                    fill
                    sizes="(max-width: 991px) 55vw, 23vw"
                    className="collage-img"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="about-thumb text-end ">
            <Image src={mainimage} alt={title1} width={513} height={485} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Fix;
