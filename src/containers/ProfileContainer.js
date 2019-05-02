import React, {Component} from 'react';
import Profile from '../components/Profile';
import ProfilePost from '../components/ProfilePost';

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