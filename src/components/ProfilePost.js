import React, {Component} from 'react';
import '../css/profile.css'
import London from './London'
import Sydney from './Sydney'
import Sanfrancisco from './Sanfancisco';
import Newyork from './Newyork'

class ProfilePost extends Component {
    render(){
        return (
            <>
            <div className="profilepost">
                <h2>Hi Im the Profile Post</h2>
                <Newyork />

            </div>
            </>
        )
    }


}

export default ProfilePost;

