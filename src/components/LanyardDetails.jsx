import React from 'react';
import linkedIn from '../images/linkedIn.png';
import gitHub from '../images/gitHub.png';
import TheOu from '../images/TheNewOu.png';

const LanyardDetails = () =>{

	const toLinkedIn = () =>{
		window.location.href = "https://www.linkedin.com/in/jabulani-sifundza";
	}

	const toGithub = () =>{
		window.location.href = "https://github.com/JabulaniSifundza";
	}
	return (
		<div>
			<img src={TheOu} alt="" className="lanyardMe" />
			<p className="lanyardText">Creative Problem 
			<br />Solver.</p>
			<p className="lanyardText">Lifelong Learner.</p>
			<p className="lanyardText">Ironman Superfan.</p>

			<div className="lanyardLinks">
				<div>
					<img src={gitHub} alt="" onClick={toGithub} className="platformIcon"/>
				</div>
				<div>
					<img src={linkedIn} alt="" onClick={toLinkedIn} className="platformIcon"/>
				</div>

			</div>
		</div>

	)
}


export default LanyardDetails;