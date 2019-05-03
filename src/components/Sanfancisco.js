import React, {Component}from 'react';
import sanfranciscoImage from '../images/sanfrancisco1.jpg';
import '../css/sanfrancisco.css';

class Sanfrancisco extends Component{
    render(){
        return(
            <>
            <div className="sanfranciscoPost">
                <div className="sanfranciscoFlex">
                    <div className="sanfranciscoDiv">
                        <h2>San Francisco</h2>  
                        <p>City of California</p>
                    </div>
                    <div className="sanfranciscoImgDiv">
                        <img src={sanfranciscoImage}></img>
                    </div>
                </div>
                <a href="#"><i class="fas fa-plus-circle"></i></a>
            </div>
            </>
        )
    }


}

export default Sanfrancisco;