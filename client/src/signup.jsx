import { useState } from "react";
import {Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
    const handelSubmit = async (e) =>{
        e.preventDefault()
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        
        
        if(regex.test(password)){
                    
                   axios.post("http://localhost:8081/signup",{name, email, password})
                    .then((result => { console.log(result)
                    alert(`you are registered as ${name}`)
                    navigate("/login");
                    }))
                    .catch(err => console.log(err))
             
                }
        else{
            alert("password must contain at least one uppercase, one lowercase, one number and one special character and length must be between 8to 15");
        }   
       
    
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Signup</h2>
                <form onSubmit={handelSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                        type="json"
                        placeholder="Enter Name"
                        value= {name}
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e) => setName(e.target.value)}
                    />
            </div>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                value= {email}
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className="mb-3">
            <label htmlFor="password">
                <strong>password</strong>
                </label>
                <input
                type="password"
                placeholder="Enter password"
                value= {password}
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
        />
        </div>
                 <button type="submit" className="btn btn-success border w-100  rounded-0 text-decoration-name ">
                  Register
                  </button>
    </form>
                 <p>Already Have an Account?</p>
                 <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-name"> Sign-in </Link>
                 
             
            </div>
        </div>
    );
}
export default Signup;