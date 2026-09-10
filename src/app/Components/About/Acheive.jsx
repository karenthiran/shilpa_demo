import Image from "next/image";
import Link from "next/link";

const Acheive = ({
  mainimage,
  title1,
  listItem,
  btnName,
  btnUrl,
  decorative,
}) => {
  return (
    <div className="row about-bg align-items-center  ">
      <div className="col-lg-6 ">
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
