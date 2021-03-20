import React, { useState, useEffect } from 'react';
import TransportOption from './TransportOption';
import './Home.css';
import FileInfo from '../fakeData/fileInormation.json';




function Home() {

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
					FileInfo.map((img) => <TransportOption key={img.id} transportType={img.trName} transportImg={img.image} /> )
				}

			</div>
		</div>
	);
}

export default Home;
