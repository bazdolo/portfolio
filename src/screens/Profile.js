import React, { useState, useEffect } from 'react';
import avatarSmall from '../images/myAvatar-small.png';
import reactLogo from '../images/reactLogo.png';
import jsLogo from '../images/jsLogo.png';
import nodejsLogo from '../images/nodejsLogo.png';
import classes from './Profile.module.css';

export default function Profile() {
	const [ details, setDetails ] = useState({ name: '', job: '', status: '', head: '', summary: '', skills: '' });

	let speechArray = [
		'Name: Baz Dolo',
		'Occupation: Software Developer',
		'Status: Looking for work',
		'Summary',
		'Experienced full-stack software engineer working with React-Native, React, Node.js and MySql, responsible for all front-end and various backend design and implementation. Having previously worked at a start-up I understand the need to meet deadlines and to develop my skills to fit the needs of the company in a fast-paced environment.',
		'Skills'
	];
	let lineArray = [ 'job', 'status', 'head', 'summary' ];
	let lineArrayIndex = 0;

	let myTimeout;
	let outer = 0;
	let typerLine = 'name';

	const typerMultiLine = (index) => {
		if (outer > speechArray.length - 1) {
			return;
		}

		let textArr = speechArray[outer].split('');

		if (index < textArr.length) {
			myTimeout = setTimeout(function() {
				setDetails((prev) => {
					return { ...prev, [typerLine]: prev[typerLine] + textArr[index] };
				});
				index++;
				typerMultiLine(index);
			}, 35);
		} else {
			outer++;
			typerLine = lineArray[lineArrayIndex];
			lineArrayIndex++;
			typerMultiLine(0);
		}
	};

	useEffect(() => {
		typerMultiLine(0);
		return () => window.clearTimeout(myTimeout);
	}, []);

	return (
		<div>
			<div className={classes.profile_container}>
				<img src={avatarSmall} />
				<div className={classes.details_text}>
					<div>{details.name}</div>
					<div>{details.job}</div>
					<div>{details.status}</div>
				</div>
			</div>
			<h2 className={classes.summary_header}>{details.head}</h2>
			<div className={classes.p_container}>
				<p className={classes.summary_text}>{details.summary}</p>
			</div>
			<h2 className={classes.summary_header}>{details.skills}</h2>
			<img className={classes.skillLogo} src={reactLogo} />
			<img className={classes.jsLogo} src={jsLogo} />
			<img className={classes.skillLogo} src={nodejsLogo} />
		</div>
	);
}
