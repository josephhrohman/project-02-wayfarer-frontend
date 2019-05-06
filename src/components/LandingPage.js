import React, {Component} from 'react';
import '../css/landingPage.css';

class LandingPage extends Component {
  render() {
    return(
      <div className='landingPageBody'>
        <div className="slider">
          <div className="slides">
            <div id="slide-1" className="slide-1">1</div>
            <div id="slide-2" className="slide-1">2</div>
            <div id="slide-3" className="slide-1">3</div>
            <div id="slide-4" className="slide-1">4</div>
            <div id="slide-5" className="slide-1">5</div>
          </div>
          <a href="#slide-1" className="sliderButton">1</a>
          <a href="#slide-2" className="sliderButton">2</a>
          <a href="#slide-3" className="sliderButton">3</a>
          <a href="#slide-4" className="sliderButton">4</a>
          <a href="#slide-5" className="sliderButton">5</a>
        </div>
        <div className="articles">
          <div className="article">
            <h2>San Francisco</h2>
            <p>Lorem ipsum is placeholder text commonly used in the 
            graphic, print, and publishing industries for previewing 
            layouts and visual mockups.</p>
          </div>
          <div className="article">
            <h2>New York</h2>
            <p>Lorem ipsum is placeholder text commonly used in the 
            graphic, print, and publishing industries for previewing 
            layouts and visual mockups.</p>
          </div>
          <div className="article">
            <h2>London</h2>
            <p>Lorem ipsum is placeholder text commonly used in the 
            graphic, print, and publishing industries for previewing 
            layouts and visual mockups.</p>
          </div>
        </div>
      </div>
    );
  };
};

export default LandingPage;