import React, {Component}from 'react';
import sanfranciscoImage from '../images/sanfrancisco1.jpg';
import '../css/sanfrancisco.css';
import CreatePost from './CreatePost';
import Posts from './Posts'

class Sanfrancisco extends Component{
    state = {
        createpost: false
    }

    handleClick = e => {
        this.setState({createpost: !this.state.createpost})
    }


    render(){
        let createPost;

        if(this.state.createpost === true){
            createPost = <CreatePost close={this.handleClick} />
        }


        return(
            <>
            <div className="sanfranciscoPost">
                <div className="sanfranciscoFlex">
                 {createPost}
                    <div className="sanfranciscoDiv">
                        <h2>San Francisco</h2>  
                        <p>City of California</p>
                    </div>
                    <div className="sanfranciscoImgDiv">
                        <img src={sanfranciscoImage}></img>
                    </div>
                </div>
                <span onClick={this.handleClick}><i className="fas fa-plus-circle"></i></span>
                <Posts />
            </div>
            </>
        )
    }


}

export default Sanfrancisco;