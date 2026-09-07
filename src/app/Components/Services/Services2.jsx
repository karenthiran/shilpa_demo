import Image from "next/image";
import Link from 'next/link';


const Services2 = ({ data ,headcontent}) => {

	return (
		<div className="my-5">
			<div className="container">
				<div className="row ">
					<div className="col-lg-5">
						<div className="dexon-section-title white padding-lg">
							<h2 className='text-black'>{headcontent.title}</h2>
						</div>
					</div>
					<div className="col-lg-7 d-flex align-items-center justify-items-center ">
						<div className="dexon-desc ">
							<p>{headcontent.Content}</p>
						</div>
						{headcontent.btnurl && 
							<div className="services-icon ">
							<a href={headcontent.btnurl}><i className="bi bi-arrow-right-short"></i></a>
						</div>
						}
					

					</div>
				</div>
				<div className="row service-bg  align-items-center">
					<div className="col-lg-5">
						<div className="serivce-thumb">
							<Image src={headcontent.mainImg} alt={headcontent.title} width={460} height={525} />
						</div>
					</div>
					<div className="col-lg-7">
						<div className="row">
							{data?.map((item, i) => (
								<div key={i} className="col-lg-12">
									<div className="single-service-box2 ">
										<div className="service-icon">
											<Image src={item.icon} alt={item?.title} width={44} height={46} />
										</div>
										<div className="service-content">
											<h2 className="service-title">{item.title}</h2>
											<p className="service-desc">{item.desc}</p>
											{item.ctaLink &&
												<div className="right-arrow">
													<Link href={item.ctaLink}><i className="bi bi-arrow-right-short"></i></Link>
												</div>
											}

										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services2;