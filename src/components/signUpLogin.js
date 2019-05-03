import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logout from './Logout';

class SignUpLogin extends Component {
  render() {
    return(
      <div className="navSignUpLogin">
        <Link to="/" className="signUp">Landing Page</Link>
        <Link to="/signup" className="signUp">Sign Up</Link>
        <Link to="/login" className="signUp">Login</Link>
        <Link to="/profile" className="signUp">Profile</Link>
        <Link to="/user" className="signUp">UserProfile</Link>
        <Logout />
      </div>
    );
  };
};

// state = {
//   createpost: false
// }

// handleClick = e => {
//   this.setState({createpost: !this.state.createpost})
// }


// render(){
//   let createPost;
//   if(this.state.createpost === true){
//       createPost = <CreatePost close={this.handleClick} />
//   }
//   return(
//       <>
//       <div className="sanfranciscoPost">
//           <div className="sanfranciscoFlex">
//            {createPost}
//               <div className="sanfranciscoDiv">
//                   <h2>San Francisco</h2>  
//                   <p>City of California</p>
//               </div>
//               <div className="sanfranciscoImgDiv">
//                   <img src={sanfranciscoImage}></img>
//               </div>
//           </div>
//           <span onClick={this.handleClick}><i class="fas fa-plus-circle"></i></span>
//       </div>
//       </>
//   )
// }

export default SignUpLogin;

