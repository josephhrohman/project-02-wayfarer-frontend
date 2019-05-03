import React, {Component} from 'react';
import sydneyImage from '../images/sydney1.jpg'
import '../css/sydney.css'

class Sydney extends Component{
    render(){
        return(
            <>
                <div className="sydneyPost">
                    <div className="sydneyFlex">
                        <div className="sydneyDiv">
                            <h2>Sydney</h2>  
                            <p>City in Australia</p>
                        </div>
                        <div className="sydneyImgDiv">
                            <img src={sydneyImage}></img>
                        </div>   
                    </div>
                    <a href="#"><i class="fas fa-plus-circle"></i></a>
                </div>
            </>
        )
    }


}

export default Sydney;