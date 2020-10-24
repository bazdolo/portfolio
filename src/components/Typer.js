import React, { useState, useEffect } from 'react';
import classes from './Typer.module.css';

export default function Typer({ setBorder }) {
	const speechArray = [
		'Hi there, my name is Barry and I am a software developer. This is my portfolio. ',
		'You can look at the the various commercial projects I have worked on by selecting the projects button above. ',
		'Alternatively you can view a summary of my skills by selecting the profile tab. ',
		'This site was created with React JS. '
	];
	let outer = 0;
	let myTimeout;
	let speed = 50;

	const [ text, setText ] = useState('');

	function typer(index) {
		if (outer > speechArray.length - 1) {
			setBorder(null);
			return;
		}
		let textArray = speechArray[outer].split('');
		if (index < textArray.length) {
			myTimeout = setTimeout(function() {
				setText((prev) => prev + textArray[index]);
				index++;
				if (index === textArray.length - 1) {
					if (outer === 1) setBorder('project-nav');
					if (outer === 2) setBorder('tech-nav');
					speed = 2000;
				} else {
					speed = 50;
				}
				typer(index);
			}, speed);
		} else {
			outer++;

			typer(0);
			if (outer !== 4) {
				setText('');
			}
		}
	}

	useEffect(() => {
		typer(0);
		return () => window.clearTimeout(myTimeout);
	}, []);

	return (
		<div className={classes.typerText}>
			<div className={classes.speech_bubble}>{text}</div>
		</div>
	);
}
