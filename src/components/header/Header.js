import React from 'react';
import './Header.css';
import mp4 from './../../video/header_bg.mp4';
import logo from './../../awesom/laptop.svg';


const Header = () => {
	return (
		<div className="header">
			
			<div className="header_links">
				<div className="header_logo">
					<img src={logo} alt="logo"/>
				</div>
				<div className="header_link">
					<a href="#about">ABOUT</a>		
					<a href="#skills">SKILLS</a>
					<a href="#reviews">REVIEWS</a>
					<a href="#order">ORDER</a>
				</div>

			</div>
			<h1>Web Developer</h1>
			<video className="header_bg" loop autoPlay>
				<source src={mp4} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
		)
}
export default Header;