import React, { useState, useEffect } from 'react';
import TransportOption from './TransportOption';
import './Home.css';
import bgImg from '../../images/BG.svg';
import bus from '../../images/bus.png';
import car from '../../images/car.png';
import bike from '../../images/bike.png';
import train from '../../images/train.png';
import FileInfo from '../fakeData/fileInormation.json';


function Home() {
	const setBGImg = {
		backgroundImage: `url(${bgImg})`,
		height: '90vh',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	};

	const [carImage, setCarImage] = useState([])
	useEffect(() => {
		setCarImage(FileInfo)
	}, [])
	return (

		<div className="container ">
			<div
				style={{ height: 'inherit' }}
				className="d-flex align-items-center flex-wrap justify-content-center"
			>

				{
					FileInfo.map((img) => <TransportOption transportType={img.trName} transportImg={img.image} /> )
				}
				{/* <TransportOption transportType="car" transportImg={car} />
				<TransportOption transportType="train" transportImg={train} />
				<TransportOption transportType="bus" transportImg={bus} />
				<TransportOption transportType="bike" transportImg={bike} /> */}
			</div>
		</div>
	);
}

export default Home;
