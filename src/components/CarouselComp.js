import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselComp.module.css';
import bestSellers from '../images/bestSellers.png';
import foodHome from '../images/foodHome.png';
import gkAppstore from '../images/GK_Appstore.png';
import gkipad from '../images/gkipad.png';
import flappy from '../images/flappy.png';
import steering from '../images/steering.png';

export default function CarouselComp({ setCarousel, isCarousel }) {
	// const [ carousel, setCarousel ] = useState(null);

	const customSetCarousel = (event) => {
		event.stopPropagation();
		// setCarousel(true);
	};

	const renderCorrectCarouselImage = () => {
		if (isCarousel === 'gk') {
			return (
				<Carousel>
					<div>
						<img src={gkAppstore} />
						{/* <p className="legend">Legend 1</p> */}
					</div>
					<div className={classes.contain}>
						<img src={gkipad} />
						{/* <p className="legend">Legend 1</p> */}
					</div>
				</Carousel>
			);
		}
		if (isCarousel === 'food') {
			return (
				<Carousel>
					<div>
						<img src={foodHome} />

						{/* <p className="legend">Legend 1</p> */}
					</div>
					<div>
						<img src={bestSellers} />
						{/* <p className="legend">Legend 1</p> */}
					</div>
				</Carousel>
			);
		}
		if (isCarousel === 'git') {
			return (
				<Carousel>
					<div className={classes.contain}>
						<img src={flappy} />
					</div>
					<div className={classes.contain}>
						<img src={steering} />
					</div>
				</Carousel>
			);
		}
	};

	return (
		<div onClick={() => setCarousel(false)} className={classes.backdrop}>
			<div onClick={customSetCarousel} className={classes.carouselContainer}>
				{renderCorrectCarouselImage()}
			</div>
		</div>
	);
}
