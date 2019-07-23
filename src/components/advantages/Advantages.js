import React, { Component } from "react";
import Slider from "react-slick";
import './Advantages.css';
import "./../../../node_modules/slick-carousel/slick/slick.css"; 
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
import briefcase from './../../awesom/briefcase.png';
import clock from './../../awesom/clock.png';
import star from './../../awesom/star.png';
import heart from './../../awesom/heart.png';



export default class Advantages extends Component {
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
      <div className="advantages">
       
        <Slider {...settings}>
          <div className="slick_item">
            <img src={briefcase} alt="briefcase" /> 
            
            <h4>548</h4>
            <span>PROJECTS COMPLETED</span>
            
          </div>

          <div className="slick_item">
           <img src={clock} alt="clock" /> 
           <h4>1465</h4>
            <span>WOPRKING HOURS</span>
          </div>
          <div className="slick_item">
            <img src={star} alt="star" /> 
            <h4>612</h4>
            <span>POSITIVE FEEDBACKS</span>
          </div>
          <div className="slick_item">
           <img src={heart} alt="heart" /> 
           <h4>748</h4>
            <span>HAPPY CLIENTS</span>
          </div>
        
        </Slider>
      </div>
    );
  }
}
