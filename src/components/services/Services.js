import React, { Component } from "react";
import './Services.css';
import Slider from "react-slick";
import "./../../../node_modules/slick-carousel/slick/slick.css"; 
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
import gem from './../../awesom/gem.svg';
import fighter from './../../awesom/fighter.svg';
import mobile from './../../awesom/mobile.svg';
import gamepad from './../../awesom/gamepad.svg';



export default class Services extends Component {
  render() {
    const settings = {
      
      infinite: true,
      speed: 500,
       arrows: true,
       
      slidesToShow: 4,
      slidesToScroll: 1,
      
       responsive: [
    
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,

        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    };
    return (
      <div className="services">
       
        <Slider {...settings}>
          <div className="service">
			 <img src={gem} alt="gem" /> 
			<h3>UI/UX DESIGN</h3>
			<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eos.</span>
			</div>
			<div className="service">
			 <img src={fighter} alt="fighter" /> 
			<h3>WEB DEVELOPMENT</h3>
			<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eos.</span>
			</div>
			<div className="service">
			 <img src={mobile} alt="mobile" /> 
			<h3>APP/ MOBILE</h3>
			<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eos.</span>
			</div>
			<div className="service">
			 <img src={gamepad} alt="gamepad" /> 
			<h3>GAME DESIGN</h3>
			<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eos.</span>
			</div>
			

        
        </Slider>
      </div>
    );
  }
}
