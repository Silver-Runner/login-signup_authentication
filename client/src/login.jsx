import React, {useState} from 'react';
import {Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    event.preventDefault();
    axios.post("http://localhost:8081/login",{email, password})
    .then(result => { console.log(result)
      if(result.data === "success"){
        alert( `you are logged in as ${email}`);
        navigate("/home");
      }
    })
    .catch(err => console.log(err))

  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2 class="class1" >Sign-in</h2>
          <form onSubmit={handleLogin} >
          <div className="mb-3">
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                value={email}
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="email">
                <strong>password</strong>
                </label>
                <input
                type="password"
                placeholder="Enter password"
                value={password}
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}/>
        </div>
                 <button type="submit"  className="btn btn-success border w-100  rounded-0 text-decoration-name">
                  Sign-in
                  </button>
        </form>
      </div>
    </div>
                
        
  );
};


export default Login;