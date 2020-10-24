import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselComp.module.css';
import bestSellers from '../images/bestSellers.png';
import foodHome from '../images/foodHome.png';

import gkLogin from '../images/gk_login.jpg';
import gkSupplier from '../images/gk_supplier.jpg';
import gkOrder from '../images/gk_order1.jpg';
import gkBasket from '../images/gk_basket.jpg';
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
				<div onClick={customSetCarousel} className={classes.carouselContainer}>
					<Carousel showThumbs={false}>
						<div>
							<img src={gkLogin} />
						</div>
						<div>
							<img src={gkBasket} />
						</div>
						<div>
							<img src={gkSupplier} />
						</div>
						{/* <div>
							<img src={basket_view} />
						</div> */}
					</Carousel>
				</div>
			);
		}
		if (isCarousel === 'food') {
			return (
				<div onClick={customSetCarousel} className={classes.carouselContainerFood}>
					<Carousel>
						<div>
							<img src={foodHome} />
						</div>
						<div>
							<img src={bestSellers} />
						</div>
					</Carousel>
				</div>
			);
		}
		if (isCarousel === 'git') {
			return (
				<Carousel>
					<div className={classes.contain}>
						<img />
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
			{renderCorrectCarouselImage()}
		</div>
	);
}
