import React from 'react';
import axios from 'axios';
import '../css/signUpLoginPage.css';

function Logout() {

  const handleLogout = (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    axios({
      method: 'post',
      url: 'https://sheltered-stream-96328.herokuapp.com/api/v1/auth/login',
      data: {
        email,
        password,
      }
    }).then(function (response) {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  }

  return(
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
