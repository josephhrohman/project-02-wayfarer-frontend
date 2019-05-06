import React, {Component} from 'react';
import '../css/userContainer.css';
import User from '../components/User'
import UserPost from '../components/UserPost'

class UserContainer extends Component {

    render(){
        const {userId} = this.props
        // console.log(this)
        return(
            <div className='userpage'>
            {/* <User id={this.props.location.state.account} /> */}
            <User userId={userId} />
            <UserPost />
            </div>
        )
    }
}


export default UserContainer;