import React, {Component} from 'react';
import sydneyImage from '../images/sydney1.jpg'
import '../css/sydney.css'
import CreatePost from './CreatePost';

class Sydney extends Component{
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
                <div className="sydneyPost">
                    <div className="sydneyFlex">
                    {createPost}
                        <div className="sydneyDiv">
                            <h2>Sydney</h2>  
                            <p>City in Australia</p>
                        </div>
                        <div className="sydneyImgDiv">
                            <img src={sydneyImage}></img>
                        </div>   
                    </div>
                    <span onClick={this.handleClick}><i class="fas fa-plus-circle"></i></span>
                </div>
            </>
        )
    }


}

export default Sydney;