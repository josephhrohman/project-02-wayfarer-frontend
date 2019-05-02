import React, {Component} from 'react';
import sydneyImage from '../images/sydney1.jpg'
import '../css/sydney.css'

class Sydney extends Component{
    render(){
        return(
            <div>
                <div className="sydneyPost">
                    <div className="sydneyDiv">
                        <h2>Sydney</h2>  
                        <p>City in Australia</p>
                    </div>
                    <div className="sydneyImgDiv">
                        <img src={sydneyImage}></img>
                    </div>   
                </div>
            </div>
        )
    }


}

export default Sydney;