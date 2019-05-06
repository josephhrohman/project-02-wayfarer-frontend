import React, {Component} from 'react';
import '../css/landingPage.css';

class LandingPage extends Component {
  render() {
    return(
      <div className='landingPageBody'>
        <div className="slider">
          <div className="slides">
            <div id="slide-1" className="slide-1"> <img className='landingImg' src="./images/sfCity.jpg" alt="SF" /> </div>
            <div id="slide-2" className="slide-1"> <img className='landingImg' src="./images/nyCity.jpg" alt="NY" /> </div>
            <div id="slide-3" className="slide-1"> <img className='landingImg' src="./images/londonCity.jpg" alt="London" /> </div>
            <div id="slide-4" className="slide-1"> <img className='landingImg' src="./images/syndeyCity.jpg" alt="Sydney" /> </div>
          </div>
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