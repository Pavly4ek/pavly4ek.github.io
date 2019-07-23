import React, { Component } from "react";
import Slider from "react-slick";
import './Reviews.css';
import './../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import "./../../../node_modules/slick-carousel/slick/slick.css"; 
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
import photo_1 from './../../photo/1.jpg';
import photo_2 from './../../photo/2.jpg';
import photo_3 from './../../photo/3.jpg';
import photo_4 from './../../photo/4.jpg';

import ImageGallery from 'react-image-gallery';



export default class Reviews extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      arrows: false,
      dots:true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const images = [
      {
        original: photo_1,
        thumbnail: photo_1,
      },
      {
        original: photo_2,
        thumbnail: photo_2
      },
      {
        original: photo_3,
        thumbnail: photo_3
      },  
      {
        original: photo_4,
        thumbnail: photo_4
      }
    ]

    return (
      <div className="reviews" id="reviews">
       <h2>Reviews</h2>
        <Slider {...settings} >

          <div className="review"> 
           <div className="review_slide">
            <ImageGallery items={images} />
           </div>
           <div className="review_text">
            <h4>REWIEW 1</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p> Assumenda neque dolore labore voluptates accusamus reprehenderit,</p> 
            <p>illum consectetur exercitationem totam ipsum.</p>
            <p> Assumenda neque dolore labore voluptates accusamus reprehenderit,</p> 
            <p>illum consectetur exercitationem totam ipsum.</p>
           </div>
          </div>

          <div className="review"> 
           <div className="review_slide">
            <ImageGallery items={images} />
           </div>
           <div className="review_text">
            <h4>REWIEW 2</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p> Assumenda neque dolore labore voluptates accusamus reprehenderit,</p> 
            <p>illum consectetur exercitationem totam ipsum.</p>
            <p> Assumenda neque dolore labore voluptates accusamus reprehenderit,</p> 
            <p>illum consectetur exercitationem totam ipsum.</p>
           </div>
          </div>

          <div className="review"> 
           <div className="review_slide">
            <ImageGallery items={images} />
           </div>
           <div className="review_text">
            <h4>REWIEW 3</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p> Assumenda neque dolore labore voluptates accusamus reprehenderit,</p> 
            <p>illum consectetur exercitationem totam ipsum.</p>
            <p> Assumenda neque dolore labore voluptates accusamus reprehenderit,</p> 
            <p>illum consectetur exercitationem totam ipsum.</p>
           </div>
          </div>

        
        </Slider>
         
      </div>
    );
  }
}
