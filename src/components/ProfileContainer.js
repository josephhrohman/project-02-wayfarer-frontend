import React, {Component} from 'react';
import Profile from './Profile';
import ProfilePost from './ProfilePost';
import '../css/ProfileContainer.css';

class ProfileContainer extends Component {

    render(){
        return (
            <>
            <div className='profilecontainer'>
                <Profile />
                <ProfilePost />
            </div>
            </>

        )

    }



}

export default ProfileContainer; 