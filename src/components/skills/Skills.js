import React from 'react';
import './Skills.css';

const Skills = () => {
	return (


		<div className="skills" id="skills">

			<h2>Progress Skills</h2>
			<h5>UI/UX DESIGN 75%</h5>
			<progress value="75" max="100" />
			<h5>WEB DEVELOPMENT 90%</h5>
			<progress value="90" max="100" />
			<h5>MARKETING 65%</h5>
			<progress value="65" max="100" />
			
		</div>
		
		)

}
export default Skills;