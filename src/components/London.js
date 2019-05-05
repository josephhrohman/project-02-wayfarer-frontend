import React, {Component} from 'react';
import londonImage from '../images/london1.jpg';
import '../css/london.css';
import CreatePost from './CreatePost';
import Posts from './Posts';

class London extends Component{

    state = {
        createpost: false
    }

    handleClick = (e) => {
        this.setState({createpost: !this.state.createpost})
    }
    


    render(){
        let createPost;
        if (this.state.createpost === true) {
            createPost = <CreatePost close={this.handleClick}/>
        }

        return(
            <>
                <div className="londonPost">
                {createPost}
                    <div className="londonFlex">
                        <div className="londonDiv">
                            <h2>London</h2>  
                            <p>United Kingdom</p>
                        </div>
                        <div className="londonImgDiv">
                            <img src={londonImage}></img>
                        </div>
                    </div>
                    <span onClick={this.handleClick}><i className="fas fa-plus-circle"></i></span>
                    <Posts />
                </div>
            </>
       )

    }


}

export default London;