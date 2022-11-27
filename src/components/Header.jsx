import React from 'react';
import myLogo from '../images/LogoRed.png'

const Header = () =>{
	return (
		<header>
			<div className="logo">
				<img src={myLogo} alt="" className="myLogo" />
			</div>
			<div className="navigate">
				<button className="navBtn" onClick={()=> window.scrollBy(0, 780, {behavior: 'smooth'})}>About</button>
				<button className="navBtn" onClick={()=> window.scrollBy(0, 2480, {behavior: 'smooth'})}>Projects</button>
				<button className="navBtn" onClick={()=> window.scrollBy(0, 3380, {behavior: 'smooth'})}>Resume</button>
				<button className="navBtn" onClick={()=> window.scrollBy(0, 3380, {behavior: 'smooth'})}>Contact</button>
			</div>
		</header>
	)
}

export default Header