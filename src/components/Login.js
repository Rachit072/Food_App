import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Login = () => {
    const [pass,setPass] = useState(true);
    const togglePass=()=>{
        setPass(!pass)
    }
  return (
    <div className="flex items-center justify-center h-auto">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md">
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-semibold text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="border border-gray-300 p-2 w-full mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-sm font-semibold text-gray-600">Password</label>
            <div className="border border-gray-300  p-2 w-full mt-1">
            <input
              type={pass?"password":"text"}
              name="password"
              id="password"
              placeholder="Enter Password"
              className="border-none outline-none"
            />
            {!pass?<FontAwesomeIcon onClick={togglePass} icon={faEye} />:
            <FontAwesomeIcon onClick={togglePass} icon={faEyeSlash} />
            }
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="rounded bg-blue-500 text-white px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
