import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import { useNotifications } from '../context/NotificationContext'; // Assuming you have this

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const { addNotification } = useNotifications();

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        addNotification('Logged in successfully', 'success');
        navigate("/DashBoard");
      } else {
        addNotification('Invalid email or password', 'error');
      }
    } catch (error) {
      console.error(error);
      addNotification('An error occurred while logging in. Please try again later.', 'error');
    } finally {
      setLoading(false);
    }
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
                  Welcome to HealthGuard
                </h2>
                <div className="flex items-center mb-6">
                  <p className="mb-0 mr-2 opacity-50">Don't have an account?</p>
                  <Link to="/register">Create Account</Link>
                </div>
                <form onSubmit={handleSubmit}>
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
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 font-normal"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                        id="password"
                        placeholder="Enter Password"
                        required
                        value={password}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-2 text-gray-500"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                  <button
                    className={`bg-indigo-900 text-white py-3 px-6 rounded w-full ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Logging In..." : "Log In"}
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