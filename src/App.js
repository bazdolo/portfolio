import React, { useState, Fragment } from 'react';
import Projects from './screens/Projects';
import Profile from './screens/Profile';
import avatarSmall from './images/myAvatar-beard.png';

import MainAvatar from './components/MainAvatar';
import Typer from './components/Typer';
import Footer from './components/Footer';
import './App.css';

function App() {
	const [ border, setBorder ] = useState(null);
	const [ screen, setScreen ] = useState(null);

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
					<div class="brand-logo-name">Baz</div>
				</a>
				<nav class={'main-nav'}>
					<ul>
						<li>
							<button
								class={
									screen === 'Projects' ? 'main-nav-active' : border === 'project-nav' ? border : null
								}
								onClick={() => {
									setBorder(null);
									setScreen('Projects');
								}}
							>
								Projects
							</button>
						</li>
						<li>
							<button
								class={screen === 'Profile' ? 'main-nav-active' : border === 'tech-nav' ? border : null}
								onClick={() => {
									setBorder(null);
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
			<Footer />
		</div>
	);
}

export default App;
