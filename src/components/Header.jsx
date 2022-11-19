import React from 'react';
import myLogo from '../images/LogoRed.png'

const Header = () =>{
	return (
		<header>
			<div className="logo">
				<img src={myLogo} alt="" className="myLogo" />
			</div>
			<div className="navigate">
				<button className="navBtn">About</button>
				<button className="navBtn">Projects</button>
				<button className="navBtn">Resume</button>
				<button className="navBtn">Contact</button>
				
			</div>
		</header>
	)
}

export default Header