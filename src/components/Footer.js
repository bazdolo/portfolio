import React from 'react';
import { MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';
import classes from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={classes.mainfooter}>
			<div className={classes.container}>
				<nav className={classes.footer_nav}>
					<ul>
						<a className={classes.contact} href="mailto:barry.dolog@gmail.com">
							<li>
								<label>Contact</label>
								<IconContext.Provider value={{ color: 'white', size: '1.5em' }}>
									<MdEmail />
								</IconContext.Provider>
							</li>
						</a>
					</ul>
				</nav>
			</div>
		</footer>
	);
}
