"use client"
import Image from "next/image";
import { founderstory } from '@/app/Data/about';

const About3 = () => {
    return (
		<>
		
        <div className="about-section style-two py-5">
			<h2 className="text-center mb-5 mt-0 display-4 fw-semibold">About us</h2>
		<div className="container">

			<div className="row align-items-center">
				<div className="col-lg-6 col-md-12">
					<div className="about-left-thumb">
					<Image src="/assets/images/slider/about-about _us.webp" alt="about-image" width={575} height={495}   />
					</div>
				</div>
				<div className="col-lg-6">
					<div className="row">
						<div className="about-testi-scroll  ">
							<div className="about-scroll1 ">
                          
                            {founderstory.map((item, index)=>(
							<div key={index} className="col-lg-12  ">
								<div className="testimonial-single-box2">
									<div className="testi-people">
									<Image src={item.image} alt={item.subTitle} width={80} height={80}   />	
									</div>
									<div className="people-name">
										<h2> {item.title} </h2>
										<span>{item.subTitle}</span>
									</div>
									<div className="testi-description">
										<div className="quote-icon">
											<i className="bi bi-quote"></i>
										</div>
										
										<p> {item.desc}</p>
									</div>
								</div>
							</div>
                            ))}
                     
						</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="row counter-bg">
				<div className="abouts-shape">
					<div className="dream-shape5">
					<Image src="/assets/images/resource/icon.png" alt="about-animimg" width={41} height={41}   />
					</div>
				</div>
			</div> */}
		
		</div>

	</div>
	</>
	
    );
};

export default About3;