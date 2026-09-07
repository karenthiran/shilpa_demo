"use client"
import { useEffect } from 'react';
import data from '../../Data/whysme.json';
import SectionTitle from '../Common/SectionTitle';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const Feature3 = () => {
    
    // useEffect(() => {
    //     loadBackgroudImages();
    //   }, []);

    return (
        // <div className="why-choose-us" data-background="/assets/images/resource/why-chs.jpg">
        <div className="why-choose-us"style={{
        backgroundImage: `url('/assets/images/resource/why-chs.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="dexon-section-title text-center white padding-lg about-chosse-content">
                        <SectionTitle
                            Title="Why SMEs pick us"
                            
                        ></SectionTitle>
					</div>
				</div>
			</div>
			<div className="row">
            {data?.map((item, i) => (
				<div key={i} className="col-lg-4 col-md-6">
					<div className="single-choose-us-box">
						<div className="choose-icon">
						<Image src={item.icon} alt={item?.title} width={36} height={36}   />
						</div>
						<div className="choose-content">
							<h3> {item.title} </h3>
							<p> {item.desc} </p>
						</div>
					</div>
				</div>
                ))}
			</div>
		</div>
	</div>
    );
};

export default Feature3;