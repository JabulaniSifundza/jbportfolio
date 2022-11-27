import {useState} from 'react';
import {MyApplications} from './MyApplications';
import {MyDesigns} from './MyDesigns';
import { motion } from "framer-motion"

const Projects = ()=>{
	const projectTypes = ["Applications", "UI/UX Designs"];
	const [projectType, setProjectType] = useState('Applications');

	return (
		<div className="projectsCont">
			<div className="projectOptions">
			{
				projectTypes.map(project =>{
					return (
						<motion.button 
						whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
						type="button" 
						className="selectType" 
						key={project} 
						onClick={()=> setProjectType(project)}>
						{project}
						</motion.button>
					)
				})					
			}
			</div>

			<div className="projectCards">
				{projectType === "Applications" && (<MyApplications />)}
				{projectType === "UI/UX Designs" && (<MyDesigns />)}			
			</div>

		
		
		</div>
	)
}
export default Projects;