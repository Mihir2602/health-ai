/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    // If login is successful:
    setIsLoggedIn(true);
    navigate("/Dashboard");
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <section className="flex-grow flex items-center bg-white dark:bg-[#0b1727] text-indigo-900 dark:text-white">
        <div className="container mx-auto px-4 h-full flex">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full">
            <div className="w-full lg:w-1/2 lg:pr-8">
              <video
                className="w-full h-full object-cover rounded-[25px]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/Login.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
              <div className="max-w-md mx-auto">
                <h2 className="text-indigo-900 dark:text-white text-2xl font-bold mb-3">
                  Welcome to Easy Frontend
                </h2>
                <div className="flex items-center mb-6">
                  <p className="mb-0 mr-2 opacity-50">Don't have an account?</p>
                  <Link to="/register">Create Account</Link>
                </div>
                <form>
                  <div className="mb-4">
                    <label className="block mb-2 font-normal" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                      id="email"
                      placeholder="Enter Email Address"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 font-normal"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                      id="password"
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                  
                  <button
                    className="bg-indigo-900 text-white py-3 px-6 rounded w-full"
                    type="submit"
                  >
                    Log In
                  </button>
                </form>
                <button className="hover:text-blue-600 py-2 px-4 rounded-lg w-full mt-4">
                  Forget your password?
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
