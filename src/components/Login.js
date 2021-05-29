import React,{useState} from 'react'
import './Login.css'
import PropTypes from 'prop-types';



async function loginUser(credentials){
    return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}


function Login({setToken}) {

    const [username,setUsername] = useState();
    const [password,setPassword] = useState();



    return (


<div className="login-wrapper">
      <h1>Please Log In</h1>

        <form>
            <label>
                <p>Username</p>
                <input type="text" onChange ={e=> setUsername(e.target.value)}></input>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange ={e=> setPassword(e.target.value)}></input>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>

        </form>
        </div>
    )
}

Login.propTypes = {
    setToken:PropTypes.func.isRequired
}

export default Login
