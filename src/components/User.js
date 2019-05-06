import React, {Component} from 'react';
import '../css/user.css';
import axios from 'axios';

class User extends Component {

    // handleLogin = (e) => {
    //     e.preventDefault();
    //     const { history } = this.props;
 state = {
     name: false
 }


componentDidMount(){
        axios.get('https://sheltered-stream-96328.herokuapp.com/api/v1/users/'+ this.props.userId)
        .then(response => {
            this.setState({ name: response.data.foundUser})

        }).catch(function(error){
            console.log(error)
        })
    }


    render(){
        const {userId} = this.props;

        return(
            <>         
            <div className="userinfo">
                <h2>User Page</h2>
                <h4>Name:  {this.state.name && this.state.name.name}</h4>
                <h4>Email: {this.state.name && this.state.name.email}</h4>
                <h4>Current City: {this.state.name && this.state.name.city}</h4>
                <h4>Join Date: {this.state.name && this.state.name.joinDate}</h4>
                <i class="fas fa-edit"></i>
            </div>

          </>
          )
    }
}

export default User

{/* <div className="userinfo">
<h2>User Page</h2>
<h4>Name: {name.name}</h4>
<h4>Email: {name.email}</h4>
<h4>Current City: {name.city}</h4>
<h4>Join Date: {name.joinDate}</h4>
</div> */}