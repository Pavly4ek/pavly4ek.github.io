import React from 'react';
import './About.css';
import signature from './../../signature.png';


const About = () => {
	return (


		<div className="about" id="about">
			
			<h2>About Us</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolorum, illum expedita nulla atque et ex saepe porro tenetur, tempore beatae blanditiis neque optio, voluptas consequuntur quo ea rem explicabo.</p>
			<img src={signature} alt="signature" />
			


		
		</div>
		)

}
export default About;