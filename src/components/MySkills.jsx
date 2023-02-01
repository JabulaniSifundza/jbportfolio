import React from 'react';
import javascript from '../images/javascript.png';
import node from '../images/node.png';
import reactLogo from '../images/react.png';
import tensorflow from '../images/tensorflow.png';
import xd from '../images/adobeXd.png';
import gCloud from '../images/googleCloud.png';
import firebase from '../images/firebaseLogo.png';
import mongo from '../images/mongoLogo.png';
import pythonLogo from '../images/pythonLogo.png'

const MySkills = ()=>{
	const skills =[
		{
			skillName: "Javascript",
			skillIcon: javascript,
			experience: "4 years"
		},
		{
			skillName: "Node.js",
			skillIcon: node,
			experience: "3 years"
		},
		{
			skillName: "React",
			skillIcon: reactLogo,
			experience: "3 years"
			
		},
		{
			skillName: "Python",
			skillIcon: pythonLogo,
			experience: "2 years"

		},
		{
			skillName: "Tensorflow",
			skillIcon: tensorflow,
			experience: "2 years"
		},
		{
			skillName: "Adobe XD",
			skillIcon: xd,
			experience: "3 years"
		},
		{
			skillName: "Google Cloud",
			skillIcon: gCloud,
			experience: "3 years"
		},
		{
			skillName: "Firebase",
			skillIcon: firebase,
			experience: "4 years"
		},
		{
			skillName: "Mongo DB",
			skillIcon: mongo,
			experience: "2 years"
		}
		/*
		 
		*/
	]

   return (
	<div className="skillsCard">
		<div className="skillsHolder">
		{
			skills.map((skill)=>{
				return(
					<div key={skill.skillName}>
						<img src={skill.skillIcon} alt={skill.skillName} className="skillIcon"/>
						<h4>{skill.skillName}</h4>
						<p className="xpTitle">Experience:
						<br />
						<span className="xpAmount">{skill.experience}</span></p>
					</div>
				)
			})
		}
		</div>
	</div>
   )
}

export default MySkills;