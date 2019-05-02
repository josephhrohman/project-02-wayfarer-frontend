import React, {Component} from 'react';
import newyorkImage from '../images/newyork1.jpg'
import '../css/newyork.css'

class Newyork extends Component{
    render(){
        return(
            <div>
            <div className="newyorkPost">
                <div className="newyorkDiv">
                    <h2>New York</h2>  
                    <p>City in New York</p>
                </div>
                <div className="newyorkImgDiv">
                    <img src={newyorkImage}></img>
                </div>   
            </div>
        </div>
        )
    }


}

export default Newyork;