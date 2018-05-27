import { NavLink } from 'react-router-dom';
import React from 'react';

const Navigation = () =>
	<div className="container">
		<nav className={['navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light'].join(' ')}>
			<div className={['col-12', 'navbar-collapse'].join(' ')} id="navBar">
				<div className="navbar-nav">
					<NavLink className={['nav-item', 'nav-link', 'active'].join(' ')} to="/">Home</NavLink>
					<NavLink className={['nav-item', 'nav-link', 'active'].join(' ')} to="/Search">Search</NavLink>
				</div>
			</div>
		</nav>
	</div>;

export default Navigation;