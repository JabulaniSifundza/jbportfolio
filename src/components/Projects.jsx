import {useState} from ' react';
import {MyApplications} from './MyApplications';
import {MyDesigns} from './MyDesigns';

export const Projects = ()=>{
	const projectTypes = ["Applications", "UI/UX Designs"];
	const [projectType, setProjectType] = useState('Applications');

	return (
		<div className="projectsCont">
			<div className="projectOptions">
			{
				projectTypes.map(project =>{
					return (
						<button type="button" className="selectType" key={project} onClick={()=> setProjectType(project)}>
						{project}
						</button>
					)
				})
			}
			</div>

			<div className="projects">
				{projectType === "Applications" && (<MyApplications />)}
				{projectType === "UI/UX Designs" && (<MyDesigns />)}			
			</div>

		
		
		</div>
	)
}