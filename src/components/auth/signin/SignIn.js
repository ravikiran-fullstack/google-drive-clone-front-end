import React, { useState } from "react";
import PropTypes from 'prop-types';

const signInUser = async (credentials) => { 
  try {
    console.log('signin user called')
    const url = 'https://google-drive-clone-rk.herokuapp.com/login';
    //const url = 'http://localhost:8585/login';
    const response = await fetch(url, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(credentials)
                    });
    const status = response.status; 
    console.log('res, status', response, status);
    const data = await response.json();
    console.log('data', data);
    return data;
  } catch(err){
    console.log("login error",err);
  }
}

const SignIn = ({ setToken }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => { 
    e.preventDefault();
    const data = await signInUser({
      username, password
    });
    console.log('token', data);
    setToken(data)
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="email" onChange={e => setUsername(e.target.value)} required/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} required/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default SignIn;
