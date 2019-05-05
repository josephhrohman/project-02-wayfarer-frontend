import React, {Component} from 'react';
import '../css/userpost.css'
import Posts from './Posts'

class UserPost extends Component {
    render(){
        return (
            <>
            <div className="userpost">
                <h2>My Post</h2>
                <Posts />
            </div>
            </>
        )
    }
}

export default UserPost;