import Image from "next/image";
import Link from "next/link";

const Fix = ({mainimage,title1,listItem,btnName,btnUrl}) => {
    return (
        <div className="row about-bg align-items-center mt-5 mt-lg-4">
        <div className="col-lg-6">
            <div className="dexon-section-title">
                <h2 >{title1}</h2>
                
            </div>
            <div className="about-item-list mt-lg-3">
                <ul>
                {listItem?.map((item, index) => (
                    <li key={index}><i className="bi bi-check2-all"></i> {item} </li>
                ))}
                </ul>
            </div>
            {btnName && 
             <div className="about-button2">
                <Link href={btnUrl} className="dexon-button">{btnName} <i className="bi bi-arrow-right-short"></i> </Link>
            </div>
            }
           
        </div>
        <div className="col-lg-6 ">
            <div className="about-thumb text-end ">
                <Image src={mainimage} alt={title1} width={513} height={485}   />
            </div>
        </div>
    </div>
    );
};

export default Fix;