import React, {Component} from 'react';
import newyorkImage from '../images/newyork1.jpg'
import '../css/newyork.css'
import CreatePost from './CreatePost'

class Newyork extends Component{
    state = {
        createpost: false
    }

    handleClick = (e) => {
        this.setState({createpost: !this.state.createpost})
    }


    render(){
        let createPost;
        if(this.state.createpost === true){
            createPost = <CreatePost close={this.handleClick}/>
        }


        return(
            <>
            <div className="newyorkPost">
                <div className="newyorkFlex">
                {createPost}
                    <div className="newyorkDiv">
                        <h2>New York</h2>  
                        <p>City in New York</p>
                    </div>
                    <div className="newyorkImgDiv">
                        <img src={newyorkImage}></img>
                    </div>
                </div>
                <span onClick={this.handleClick}><i class="fas fa-plus-circle"></i></span>
            </div>
        </>
        )
    }


}

export default Newyork;