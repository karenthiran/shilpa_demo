"use client"
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";
import { homeservicecard1, homeservicecard2, homeservicecard3, homeservicecard4 } from "@/app/Data/homeservice";

const Service1 = ({headcontent}) => {


	// useEffect(() => {
	// 	loadBackgroudImages();
	// }, []);


	return (
		// <div className="service-section service" data-background="/assets/images/resource/service-bg.jpg">
		<div className="service-section service" style={{
        backgroundImage: `url('/assets/images/resource/service-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
			<div className="container">
				<div className="row dream1-bg">
					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-12">
								<div className="dexon-section-title white padding-lg1">
									<h2>{headcontent?.title1}</h2>
									{headcontent?.Content && <p>{headcontent?.Content}</p>}

								</div>
							</div>
							<div className="col-lg-12 ">
								<div className="single-service-box upper2" >
									<ServiceCard
										data={homeservicecard1}
									></ServiceCard>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="single-service-box upper4">
									<ServiceCard
										data={homeservicecard2}
									></ServiceCard>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-12">
								<div className="single-service-box upper">
									<ServiceCard
										data={homeservicecard3}
									></ServiceCard>
								</div>
							</div>

							<div className="col-lg-12">
								<div className="single-service-box upper3">
									<ServiceCard
										data={homeservicecard4}
									></ServiceCard>
								</div>
							</div>

						</div>
					</div>
					<div className="service-shape">
						<div className="serivce-shape">
							<Image src="/assets/images/resource/shap-2.png" alt="service-staranimation-img" width={40} height={40} />
						</div>
						<div className="serivce-shape2">
							<Image src="/assets/images/resource/shape3.png" alt="service-animation-img" width={70} height={69} />
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Service1;