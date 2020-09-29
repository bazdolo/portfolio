import React, { useState } from 'react';
import CarouselComp from '../components/CarouselComp';
import gokart_img from '../images/wordLogoWhite.png';
import foodLogo from '../images/foodtohomelogo.jpg';
import githubLogo from '../images/githubLogo.png';

import classes from './Projects.module.css';

export default function Projects() {
	const [ isCarousel, setCarousel ] = useState(null);

	return (
		<div className={classes.container}>
			<section>
				<div className={classes.company_section}>
					<div className={classes.company_title}>
						<a target="_blank" rel="noopener noreferrer" href={'https://getgokart.com'}>
							<img className={classes.company_img} src={gokart_img} />
						</a>
						<div className={classes.london}>London</div>
					</div>

					<p>
						GoKart the ordering app for restaurants. Allowing food businesses to order their ingredients
						anywhere, any time with the same discounted prices the big chains pay.
					</p>
				</div>
				<div class={classes.description_section}>
					<p>
						The mobile application was built with React Native for Android and IOS. While working for Gokart
						I was responsible for the entire lifecyle of the project.
					</p>
					<p>
						I also created many internal systems at the company making use of my skills with React, Node.js
						and Mysql
					</p>

					<button onClick={() => setCarousel('gk')} className={classes.imageButton}>
						View Images
					</button>
				</div>
			</section>
			<section>
				<div class={classes.company_section}>
					<div class={classes.company_title}>
						<a target="_blank" rel="noopener noreferrer" href={'https://foodtoyourhome.com'}>
							<img class={classes.company_img} src={foodLogo} />
						</a>
						<div className={classes.london}>London</div>
					</div>

					<p>
						A food supplier app that connects food and beverage sector businesses, including restaurants,
						bars, cafés, and food trucks with a broader range of suppliers than ever before.
					</p>
				</div>
				<div class={classes.description_section}>
					<p>
						While Working for Foodtoyourhome I was responsible for the front-end of the web application, I
						used HTML, CSS and Javascript / Jquery to bring functionality and responsive elements to the
						site.
					</p>
					<button onClick={() => setCarousel('food')} className={classes.imageButton}>
						View Images
					</button>
				</div>
			</section>
			<section>
				<div class={classes.company_section}>
					<div class={classes.company_title}>
						<a target="_blank" rel="noopener noreferrer" href={'https://github.com'}>
							<img class={classes.company_img} src={githubLogo} />
						</a>
						<div className={classes.london}>Github</div>
					</div>

					<p>
						Besides my commercial projects I have a number of small hobby projects. I enjoy playing around
						with the P5.js library and I have some small back-end projects created with Node.js
					</p>
				</div>
				<div class={classes.description_section}>
					<p>
						This portfolio site was created from scratch with React and CSS. It is still being worked on but
						if you would like to see the code for the project you can check it out below
					</p>
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/bazdolo/portfolio">
						<button className={classes.imageButton}>View Github</button>
					</a>
				</div>
			</section>
			{isCarousel ? <CarouselComp setCarousel={setCarousel} isCarousel={isCarousel} /> : null}
		</div>
	);
}
