import Link from "next/link";
import Image from "next/image";

const ServiceCard = ({ data }) => {
    return (
        <>
            {data?.map((item, index) => (
                <div key={index} className="service-content">
                    <div className="d-flex align-items-center gap-3 mb-2">
                        {item.img && (
                            <div className="service-content-icon">
                                <Image
                                    src={item.img}
                                    alt={item.heading}
                                    fill
                                    sizes="70px"
                                    className="service-content-icon-img"
                                />
                            </div>
                        )}
                        <h3 className="service-title mb-0">{item.heading}</h3>
                    </div>
                    <p className="service-desc">{item.desc}</p>
                    <div className="serviceCard-list">
                        <ul className="list-unstyled">
                            {item.list?.map((li, i) => (
                                <li key={i}><i className="bi bi-check2-all gap-4"></i> {li}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="header-button ">
                    <Link href={item.link} className="btn service-content-btn mt-4 py-2 ">{item.btnname}</Link>

                    </div>
                </div>
            ))}
        </>
    );
};

export default ServiceCard;
