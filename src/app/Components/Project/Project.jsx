import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import ProjectCardStyle1 from "./ProjectCardStyle1";
import ProjectCardStyle2 from "./ProjectCardStyle2";
import Image from "next/image";

const Project = () => {
    return (
        <div className="">
		<div className="container">

			<h2 className="text-center my-5 display-5 fw-semibold">Case Snapshots</h2>
			<div className="row">

				<ProjectCardStyle1
					img="/assets/images/resource/pr1.jpg"
					subTitle="HRMS | Retail, 1.2k:"
					title="automated OT, manager approvals, month-end locked"
				></ProjectCardStyle1>

				<ProjectCardStyle2
					img="/assets/images/resource/pr2.jpg"
					subTitle="ISO | Manufacturing"
					title="SOP pack + IAs; passed 9001 on first attempt"
				></ProjectCardStyle2>

				<ProjectCardStyle2
					img="/assets/images/resource/pr3.jpg"
					subTitle="Training | EdTech"
					title="1-day leadership; NPS ↑; handover SLAs met"
				></ProjectCardStyle2>

				<ProjectCardStyle2
					img="/assets/images/resource/pr4.jpg"
					subTitle="Security | Events"
					title=" guard SOPs + drills; incident time to close ↓"
				></ProjectCardStyle2>

				<div className="col-lg-4 col-md-6">
					<div className="single-project-box style-two">
						<div className="project-thumb">
							<Image src="/assets/images/resource/pr5.png" alt="project-thumb-img" width={416} height={426}   />
							<div className="project-button">
								<div className="icon">
									<Image src="/assets/images/resource/project-icon.png" alt="project-thumb-icon" width={82} height={49}   />
								</div>
								<div className="dexon-button2 text-center">
									<Link href="/casestudies">Open full case studies <i className="bi-arrow-right-short"></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
                
			</div>
		</div>
	</div>

    );
};

export default Project;