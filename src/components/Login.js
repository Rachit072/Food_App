import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../utils/loginSlice";

const initialState = {firstName:'',lastName:'',email:'',password:'',confirmPassword:''}
export const Login = () => {
    const [isSignup,setIsSignup] = useState(false);
    const [formData,setFormData] = useState(initialState)
    const [pass,setPass] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const togglePass=()=>{
        setPass(!pass)
    }
    const switchMode=()=>{
      setFormData(initialState);
      setIsSignup(!isSignup);
    }
    const handleChange =(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
     if(isSignup){
      dispatch(signUp(formData))
     }else{
      dispatch(signIn(formData))
     }
     navigate('/')
    }
  return (
    <div className="flex items-center justify-center h-auto">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md">
        <form onSubmit={handleSubmit}>
        {isSignup && (
              <>
              <label htmlFor="firstName" className="text-sm font-semibold text-gray-600">First Name</label>
              <input name='firstName'  className='border border-gray-300 p-2 w-full mt-1' type='text' placeholder='First Name' onChange={handleChange} required/>
              <label htmlFor="lastName" className="text-sm font-semibold text-gray-600">Last Name</label>
              <input name='lastName' className='border border-gray-300 p-2 w-full mt-1' type='text' placeholder='Last Name' onChange={handleChange} required/>
              </>
            )}
          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-semibold text-gray-600" >Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="border border-gray-300 p-2 w-full mt-1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-sm font-semibold text-gray-600">Password</label>
            <div className="border border-gray-300 flex justify-between p-2 w-full mt-1">
            <input
              type={pass?"password":"text"}
              name="password"
              id="password"
              placeholder="Enter Password"
              className="border-none outline-none"
              onChange={handleChange}
            />
            <span>
              {!pass?<FontAwesomeIcon  onClick={togglePass} icon={faEye} />:
              <FontAwesomeIcon onClick={togglePass} icon={faEyeSlash} />}
            </span>
            </div>
          </div>
          {
            isSignup && 
            <div>
              <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-600">Confirm Password</label>
              <input name='confirmPassword' className='border border-gray-300 p-2 w-full mt-1' type='password' placeholder=' Repeat Password' onChange={handleChange} required/>
            </div> 
            }
          <div className="text-center">
            <button
              type="submit"
              className="rounded bg-blue-500 text-white px-4 py-2 mt-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            >
              {isSignup ? 'Sign Up' : 'Login'}
            </button>
            <div className="m-2">
              <button className="" onClick={switchMode} >{isSignup ? 'Already have an account Sign In':"Don't have an account ? Sign Up"}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
