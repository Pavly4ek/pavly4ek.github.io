import React, { Component } from "react";
import Slider from "react-slick";
import './Quotes.css';
import "./../../../node_modules/slick-carousel/slick/slick.css"; 
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";



export default class Quotes extends Component {
  render() {
    const settings = {
      
      infinite: true,
      speed: 500,
       arrows: false,
       dots:true,
      slidesToShow: 1,
      slidesToScroll: 1, 
       autoplay: true,
      autoplaySpeed: 2000,  
    };
    return (
      <div className="quotes">
       
        <Slider {...settings}>
          <div className="quote">
            <p>“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking
            forward to start the next one asap.”</p>
      <span>Michael Hopkins</span>
            
          </div>

          <div className="quote">
            <p>“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking
            forward to start the next one asap.”</p>
      <span>Michael Hopkins</span>
            
          </div>

          <div className="quote">
            <p>“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking
            forward to start the next one asap.”</p>
      <span>Michael Hopkins</span>
            
          </div>

          
        </Slider>
      </div>
    );
  }
}
