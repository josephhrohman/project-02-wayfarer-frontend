import React, {Component} from 'react';
import LoginPage from './LoginPage';
import {Link} from 'react-router-dom';

class SignUpLogin extends Component {
  state = {
    loginModal: false,
  }

  render() {

    return(
      <div className="navSignUpLogin">
        <Link to="/signup" className="signUp">Sign Up</Link>
        <Link to="/login" className="signUp">Login</Link>
        {/* <a className="signUp" onClick={this.openModal}>Login</a> */}
        {/* {loginModal} */}
      </div>
    );
  };
};

export default SignUpLogin;

// state = {
//   createpost: false
// }

// handleClick = (e) => {
//   this.setState({createpost: !this.state.createpost})
// }



// render(){
//   let createPost;
//   if(this.state.createpost === true){
//       createPost = <CreatePost close={this.handleClick}/>
//   }
//   return(
//       <>
//           <div className="sydneyPost">
//               <div className="sydneyFlex">
//               {createPost}
//                   <div className="sydneyDiv">
//                       <h2>Sydney</h2>  
//                       <p>City in Australia</p>
//                   </div>
//                   <div className="sydneyImgDiv">
//                       <img src={sydneyImage}></img>
//                   </div>   
//               </div>
//               <span onClick={this.handleClick}><i className="fas fa-plus-circle"></i></span>
//               <Posts />
//           </div>
//       </>
//   )
