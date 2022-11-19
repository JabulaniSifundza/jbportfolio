import React from 'react';

const MySkills = ()=>{
	const skills =[
		{
			skillName: "Javascript",
			skillIcon: "",
			experinece: "3.5 years"
		},
		{
			skillName: "Node.js",
			skillIcon: "",
			experinece: "3 years"
		},
		{
			skillName: "React",
			skillIcon: "",
			experinece: "2.5 years"
			
		},
		{
			skillName: "Tensorflow",
			skillIcon: "",
			experinece: "1.5 years"
		},
		{
			skillName: "Adobe Experience Design",
			skillIcon: "",
			experinece: "2.5 years"
		},
		{
			skillName: "Google Cloud",
			skillIcon: "",
			experinece: "3 years"
		},
		{
			skillName: "Firebase",
			skillIcon: "",
			experinece: "3.5 years"
		},
		{
			skillName: "Mongo DB",
			skillIcon: "",
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

	<div>
	{
		skills.map((skill)=>{
			return(
				<div key={skill.skillName}>
					<img src={skill.skillIcon} alt={skill.skillName} />
					<h4>{skill.skillName}</h4>
					<p>Experience <span>{skill.experinece}</span></p>
				</div>
			)
		})
	}
	</div>
   )
}