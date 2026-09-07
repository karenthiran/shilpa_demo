"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Slider from "react-slick";
import data from '../../Data/testimonial1.json';
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Testimonial1 = () => {

	// useEffect(() => {
	// 	loadBackgroudImages();
	// }, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 600,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1399,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	};

	return (
		<>



			{/* <div className="testimoonial-section" data-background="/assets/images/resource/testi-bg.jpg"> */}
			<div className="testimoonial-section" style={{
				backgroundImage: `url('/assets/images/resource/testi-bg.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
				<div className="container">
					<div className="row dream-bg my-5 ">
                <div className="col-lg-12">
                    <div className="dexon-section-title ">
                        <SectionTitle
                            Title="What Say Our Customers <br/>About Dexon"
							Content='Distinctively supply exceptional services after uniquely integrate
alternative markets rather emerging initiatives.'
                        ></SectionTitle>
                    </div>
                </div>
                <div className="dream-shape mt-5">
                    <Image src="/assets/images/resource/border2.png" alt="core-module-circle" width={774} height={172} />
                </div>

            </div>
					<div className="row">
						<div className="testi-list owl-carousel cs_slider_gap_30 ">
							<Slider {...settings}>
								{data.map((item, index) => (
									<div key={index} className="col-lg-12  ">
										<div className="testimonial-single-box  ">
											{/* <div className="testi-people border"> */}
											{/* </div> */}
											<div className="people-name  d-flex align-items-center gap-3 ">
												<Image src={item.image} alt={item?.title} width={75} height={75} className="testimonial" />
												<div>
													<h2> {item?.title} </h2>
													<span>{item?.subTitle}</span>
												</div>
											</div>
											<div className="testi-description ">
												<p>“{item.desc}”</p>
											</div>
											<div className="company-logo ">
												<a href="#"><Image src={item.icon} alt="company-logo" width={90} height={35} /></a>
											</div>
											<div className="company-rating ">
												<ul>
													<li><i className="bi bi-star-fill"></i></li>
													<li><i className="bi bi-star-fill"></i></li>
													<li><i className="bi bi-star-fill"></i></li>
													<li><i className="bi bi-star-fill"></i></li>
													<li><i className="bi bi-star-half"></i></li>
												</ul>
											</div>
										</div>
									</div>
								))}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</>
	);

};

export default Testimonial1;