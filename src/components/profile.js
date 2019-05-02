import React, {Component} from 'react';

import '../css/Profile.css';


class Profile extends Component {
    render(){
        return(
            <>
            <div className="profilepage">
                <h2>Profile Page</h2>
                <h3>Name:</h3>
                <h3>Current City:</h3>
                <h3>Join Date:</h3>
            </div>
            </>
        )
    }
}

export default Profile;