import React, {Component} from 'react';
import '../css/userContainer.css';
import User from '../components/User'
import UserPost from '../components/UserPost'

class UserContainer extends Component {

    render(){
        // console.log(this.props.location.state.account)
        return(
            <div className='userpage'>
            {/* <User id={this.props.location.state.account} /> */}
            <User />
            <UserPost />
            </div>
        )
    }
}


export default UserContainer;