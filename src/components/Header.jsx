import React from 'react';

const Header = () =>{
	return (
		<header>
			<div className="logo">
				<img src="" alt="" className="myLogo" />
			</div>
			<div className="navigate">
				<button className="navBtn">About</button>
				<button className="navBtn">Projects</button>
				<button className="navBtn">Contact</button>
			</div>
		</header>
	)
}

export default Header