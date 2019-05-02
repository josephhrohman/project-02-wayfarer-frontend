import React, {Component} from 'react';
import londonImage from '../images/london1.jpg'
import '../css/london.css'

class London extends Component{
    render(){
        return(
            <div className="londonPost">
                <div className="londonDiv">
                    <h2>London</h2>  
                    <p>United Kingdom</p>
                </div>
                <div className="londonImgDiv">
                    <img src={londonImage}></img>
                </div>   

            </div>
        )
    }


}

export default London;