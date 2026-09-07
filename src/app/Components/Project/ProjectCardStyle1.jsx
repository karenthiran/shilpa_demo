import Image from "next/image";

const ProjectCardStyle1 = ({img,subTitle,title}) => {
    return (
        <div className="col-lg-8">
        <div className="single-project-box">
            <div className="project-thumb">
                 <Image src={img} alt="ProjectCardStyle1-img" width={856} height={457}   />
                <div className="project-content">
                    <h5>{subTitle}</h5>
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProjectCardStyle1;