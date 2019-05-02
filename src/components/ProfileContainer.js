import React, {Component} from 'react';
import Profile from './profile';
import ProfilePost from './ProfilePost';

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