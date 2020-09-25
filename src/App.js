import React, { useState, Fragment } from 'react';
import Projects from './screens/Projects';
import Profile from './screens/Profile';
import avatarSmall from './images/myAvatar-small.png';

import MainAvatar from './components/MainAvatar';
import Typer from './components/Typer';
import './App.css';

function App() {
	const [ border, setBorder ] = useState(null);
	const [ screen, setScreen ] = useState('Profile');

	const renderScreen = () => {
		if (screen === 'Projects') {
			return <Projects />;
		}
		if (screen === 'Profile') {
			return <Profile />;
		} else {
			return (
				<Fragment>
					<MainAvatar />
					<Typer setBorder={setBorder} />
				</Fragment>
			);
		}
	};

	return (
		<div class="container full-height-grow">
			<header class="main-header">
				<a class="brand-logo">
					<img onClick={() => setScreen(null)} class="avatar-header" src={avatarSmall} />
					<div class="brand-logo-name">Baz Dolo</div>
				</a>
				<nav class="main-nav">
					<ul>
						<li class={border === 'project-nav' ? border : null}>
							<button
								onClick={() => {
									setScreen('Projects');
								}}
							>
								Projects
							</button>
						</li>
						<li class={border === 'tech-nav' ? border : null}>
							<button
								onClick={() => {
									setScreen('Profile');
								}}
							>
								Profile
							</button>
						</li>
					</ul>
				</nav>
			</header>
			{renderScreen()}
			<div class="circle-1" />
			<div class="circle-2" />
			<div class="circle-3" />
			<div class="circle-4" />
		</div>
	);
}

export default App;
