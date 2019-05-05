import React, {Component} from 'react';
import '../css/user.css';
import axios from 'axios';

class User extends Component {

    // handleLogin = (e) => {
    //     e.preventDefault();
    //     const { history } = this.props;
 state = {
     name: []
 }


componentDidMount(){
        axios.get('https://sheltered-stream-96328.herokuapp.com/api/v1/users/'+this.props.id)
        .then(response => {
            console.log(response)
            // return response.data.foundUser.name
            this.setState({ name: response.data.foundUser})
        }).catch(function(error){
            console.log(error)
        })
    }


    render(){
        const {name} = this.state
        return(
            <>         
            <div className="userinfo">
                <h2>User Page</h2>
                <h4>Name: {name.name}</h4>
                <h4>Email: {name.email}</h4>
                <h4>Current City: {name.city}</h4>
                <h4>Join Date: {name.joinDate}</h4>
            </div>
          </>
          )
    }
}

export default User
