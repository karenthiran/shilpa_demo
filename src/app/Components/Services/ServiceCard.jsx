import Link from "next/link";

const ServiceCard = ({ data }) => {
    return (
        <>
            {data?.map((item, index) => (
                <div key={index} className="service-content">
                    <h3 className="service-title ">{item.heading}</h3>
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