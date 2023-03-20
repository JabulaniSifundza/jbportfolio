import React, { useState } from "react";
import myLogo from '../images/LogoRed.png';
import close from '../images/close.svg';
import menu from '../images/menu.svg';

const Header = () =>{
	  const [toggle, setToggle] = useState(false);
	return (
		<header>
			<div className="logo">
				<img src={myLogo} alt="" className="myLogo" />
			</div>
			<div className="navigate">
				<button className="navBtn" onClick={()=> window.scrollBy(0, 790, {behavior: 'smooth'})}>About</button>
				<button className="navBtn" onClick={()=> window.scrollBy(0, 3420, {behavior: 'smooth'})}>Projects</button>
				<button className="navBtn" onClick={()=> window.scrollBy(0, 4280, {behavior: 'smooth'})}>Resume</button>
				<button className="navBtn" onClick={()=> window.scrollBy(0, 4280, {behavior: 'smooth'})}>Contact</button>
			</div>

			<div className="mobiNav">
				<img src={toggle ? close : menu} alt="Menu" onClick={()=>setToggle(!toggle)} />
				<div className={`${!toggle ? "hidden":"flex"}`}>
					<button className="navBtn" onClick={()=> window.scrollBy(0, 790, {behavior: 'smooth'})}>About</button>
					<button className="navBtn" onClick={()=> window.scrollBy(0, 3420, {behavior: 'smooth'})}>Projects</button>
					<button className="navBtn" onClick={()=> window.scrollBy(0, 4280, {behavior: 'smooth'})}>Resume</button>
					<button className="navBtn" onClick={()=> window.scrollBy(0, 4280, {behavior: 'smooth'})}>Contact</button>
				</div>
			</div>
		</header>
	)
}

export default Header