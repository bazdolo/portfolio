import React, { useState, useEffect } from 'react';
import classes from './Typer.module.css';

export default function Typer({ setBorder }) {
	let speechArray = [
		'Hi there, my name is Baz and I am a software developer. This is my portfolio.                 ',
		'You can look at the the various commercial projects I have worked on by selecting the projects button above.               ',
		'Alternatively you can view a summary of my skills by selecting the profile tab.                       ',
		'This site was created entirely with React JS'
	];
	let outer = 0;
	let myTimeout;

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

				typer(index);
			}, 40);
		} else {
			outer++;
			if (outer === 1) setBorder('project-nav');
			if (outer === 2) setBorder('tech-nav');
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

	return <div className={classes.typerText}>{text}</div>;
}
