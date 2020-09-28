import React from 'react';
import classes from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={classes.mainfooter}>
			<div className={classes.container}>
				<nav className={classes.footer_nav}>
					<ul>
						<a className={classes.contact} href="mailto:barry.dolog@gmail.com">
							<li>Contact</li>
						</a>
					</ul>
				</nav>
			</div>
		</footer>
	);
}
