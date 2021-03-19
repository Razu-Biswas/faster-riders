import React from 'react';
import TransportOption from './TransportOption';
import './Home.css';
import bgImg from '../../images/BG.svg';
import bus from '../../images/bus.png';
import car from '../../images/car.png';
import bike from '../../images/bike.png';
import train from '../../images/train.png';


function Home() {
	const setBGImg = {
		backgroundImage: `url(${bgImg})`,
		height: '90vh',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	};
	return (
		<div className="container" style={setBGImg}>
			<div
				style={{ height: 'inherit' }}
				className="d-flex align-items-center flex-wrap justify-content-center"
			>
				<TransportOption transportType="car" transportImg={car} />
				<TransportOption transportType="train" transportImg={train} />
				<TransportOption transportType="bus" transportImg={bus} />
				<TransportOption transportType="bike" transportImg={bike} />
			</div>
		</div>
	);
}

export default Home;
