"use client"
import SectionTitle from "../Common/SectionTitle";
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Cta = ({ title, buttons = {},sideicon ,list=[],para}) => {

	const CallContent = {
		icon: '/assets/images/resource/call.png',
		title2: '+94 77 764 0985',
		Content: 'Call/Whats App',
	}

	// useEffect(() => {
	// 	loadBackgroudImages();
	// }, []);


	return (
		// <div className="call-to-action" data-background="/assets/images/resource/call-bg.png">
		<div className="call-to-action"style={{
        backgroundImage: `url('/assets/images/resource/call-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
			<div className="container">
				<div className="row dream1-bg">
					<div className="col-lg-6">
						<div className="dexon-section-title white">
							<SectionTitle
								Title={title}
								para = {para}
								list={list}
							></SectionTitle>
							
						</div>
						<div className="dexon-button">
							<div
								className={`d-flex gap-4 mt-4 flex-wrap align-items-center justify-content-start  `}
							>
								{/* Button 1 */}
								{buttons.btn1?.label && (
									<button
										onClick={buttons.btn1.link || "#"}

									>
										{buttons.btn1.label}
										<i className="bi bi-arrow-right-short ms-2 rotate"></i>
									</button>
								)}

								{/* Button 2 */}
								{buttons.btn2?.label && (
									<button
										onClick={buttons.btn2.link || "#"}

									>
										{buttons.btn2.label}
										<i className="bi bi-arrow-right-short ms-2"></i>
									</button>
								)}
							</div>
						</div>
					</div>
					<div className="col-lg-3"></div>
					{sideicon == true &&
						<div className="col-lg-3">
						<div className="call-info">
							<div className="call-icon">
								<Image src={CallContent.icon} alt="call-icon" width={50} height={50} />
							</div>
							<div className="call-number">
								<h2>{CallContent.title2}</h2>
							</div>
							<div className="call-text">
								<span>({CallContent.Content})</span>
							</div>
						</div>
					</div> 
					}
				
					<div className="call-to-all-shape">
						<div className="call-shape">
							<Image src="/assets/images/resource/line.png" alt="call-shape" width={302} height={376} />
						</div>
						<div className="call-shape2">
							<Image src="/assets/images/resource/shap2.png" alt="call-shape2" width={183} height={96} />
						</div>
						<div className="call-shape3">
							<Image src="/assets/images/resource/shap1.png" alt="call-shape3" width={41} height={42} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cta;