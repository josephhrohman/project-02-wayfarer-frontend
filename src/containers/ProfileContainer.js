import React, {Component} from 'react';
import Profile from '../components/Profile';
import ProfilePost from '../components/ProfilePost';
import '../css/profileContainer.css';


class ProfileContainer extends Component {
    state = {
        currentCity: null,
    }


    changeCity = event => {
        console.log(event.target.innerText)
        const currentCity = event.target.innerText;
        this.setState({ currentCity })
    }


    render() {

        return (
            <>
            <div className='profilecontainer'>
                <Profile changeCity={this.changeCity} />
                <ProfilePost currentCity={this.state.currentCity} />
            </div>
            </>

        )

    }



}

export default ProfileContainer; 