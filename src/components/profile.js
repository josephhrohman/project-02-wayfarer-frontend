import React, {Component} from 'react';

import '../css/profile.css';
import '../css/london.css';
import '../css/newyork.css';
import '../css/sanfrancisco.css';
import '../css/sydney.css';

import london from '../images/london.png';
import sydney from '../images/sydney.png';
import sanfrancisco from '../images/sanfrancisco.png';
import newyork from '../images/newyork.png';



class Profile extends Component {

    render(){
        return(
            <>
            <div className="profilepage">
                <h2>Cities</h2>
                    <div>
                        <button onClick={this.props.changeCity} className="london"><img src={london}></img><p>London</p></button>
                    </div>
                    <div>
                        <button onClick={this.props.changeCity}  className="sydney"><img src={sydney}></img><p>Sydney</p></button>
                    </div>
                    <div>
                        <button onClick={this.props.changeCity}  className="sanfrancisco"><img src={sanfrancisco}></img><p>San Francisco</p></button>
                    </div>
                    <div>
                        <button onClick={this.props.changeCity}  className="newyork"><img src={newyork}></img><p>New York</p></button>
                    </div>
            </div>
            </>
        )

    }


}

export default Profile;