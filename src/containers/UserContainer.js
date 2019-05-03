import React, {Component} from 'react';
import ninja from '../images/ninja.png';
import '../css/userContainer.css';
import User from '../components/User'
import UserPost from '../components/UserPost'

class UserContainer extends Component {
    render(){
        return(
            <div className='userpage'>
            <User />
            <UserPost />
              {/* <div className="usercontainer">
                <div className="userpages">
                    <div>
                        <img src={ninja}></img>
                    </div>
                    <div className="userinfo">
                        <h4>Name:</h4>
                        <h4>Email:</h4>
                        <h4>Current City:</h4>
                        <h4>Join Date:</h4>
                    </div>
                </div>
                <div className="userpost">
                    <h3>POST</h3>
                </div>
              </div> */}
            </div>
        )
    }
}


export default UserContainer;