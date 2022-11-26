import React from 'react';
import javascript from '../images/javascript.png';
import node from '../images/node.png';
import reactLogo from '../images/react.png';
import tensorflow from '../images/tensorflow.png';
import xd from '../images/adobeXd.png';
import gCloud from '../images/googleCloud.png';
import firebase from '../images/firebaseLogo.png';
import mongo from '../images/mongoLogo.png';

const MySkills = ()=>{
	const skills =[
		{
			skillName: "Javascript",
			skillIcon: javascript,
			experinece: "3.5 years"
		},
		{
			skillName: "Node.js",
			skillIcon: node,
			experinece: "3 years"
		},
		{
			skillName: "React",
			skillIcon: reactLogo,
			experinece: "2.5 years"
			
		},
		{
			skillName: "Tensorflow",
			skillIcon: tensorflow,
			experinece: "1.5 years"
		},
		{
			skillName: "Adobe XD",
			skillIcon: xd,
			experinece: "2.5 years"
		},
		{
			skillName: "Google Cloud",
			skillIcon: gCloud,
			experinece: "3 years"
		},
		{
			skillName: "Firebase",
			skillIcon: firebase,
			experinece: "3.5 years"
		},
		{
			skillName: "Mongo DB",
			skillIcon: mongo,
			experinece: "2 years"
		}
		/*
		{
			skillName: Python,
			skillIcon: "",
			experience: 1.5 years

		} 
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
						<p>Experience:
						<br />
						<span>{skill.experinece}</span></p>
					</div>
				)
			})
		}
		</div>
	</div>
   )
}

export default MySkills;