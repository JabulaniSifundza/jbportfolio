import React from 'react';
import myLogo from '../images/LogoRed.png'
import linkedIn from '../images/linkedIn.png';
import gitHub from '../images/gitHub.png';

const Footer = () =>{
	const toLinkedIn = () =>{
		window.location.href = "https://www.linkedin.com/in/jabulani-sifundza";
	}

	const toGithub = () =>{
		window.location.href = "https://github.com/JabulaniSifundza";
	}
	return (
		<footer>
			<div className="logo">
				<img src={myLogo} alt="" className="myLogo" />
			</div>
			<div className="credits">
				<p className="assetSources"> &copy; 2022 Jabulani J Sifundza</p>
			</div>
			<div className="socialLinks">
				<div>
					<img src={gitHub} alt="" onClick={toGithub} className="footerIconG"/>
				</div>
				<div>
					<img src={linkedIn} alt="" onClick={toLinkedIn} className="footerIconL"/>
				</div>
			</div>
		</footer>
	)
}

export default Footer