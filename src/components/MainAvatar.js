import React from 'react';
import avatarLarge from '../images/myAvatar-large.png';
import classes from './MainAvatar.module.css';

export default function MainAvatar() {
	return (
		<div className={classes.avatar_container}>
			<div>
				<img className={classes.avatar_image} src={avatarLarge} />
			</div>
		</div>
	);
}
