import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAt,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="mt-6"
    >
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="uname">
              USERNAME:
            </label>
            <input
              type="text"
              className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10"
              id="uname"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="email">
              EMAIL:
            </label>
            <input
              type="email"
              className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10"
              id="email"
            />
            <FontAwesomeIcon
              icon={faAt}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="pass">
              PASSWORD:
            </label>
            <input
              type="password"
              className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10"
              id="pass"
              placeholder="******"
            />
            <FontAwesomeIcon
              icon={faLock}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col relative mb-6">
            <label className="opacity-80 font-medium mb-2" htmlFor="conPass">
              CONFIRM PASSWORD:
            </label>
            <input
              type="password"
              className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10"
              id="conPass"
              placeholder="******"
            />
            <FontAwesomeIcon
              icon={faLock}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col mb-6">
            <label htmlFor="email" className="font-medium mb-2">
              COUNTRY:
            </label>
            <div className="w-full">
              <select
                type="text"
                className="w-full bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 opacity-80"
              >
                <option
                  value=""
                  selected
                  className="bg-white dark:bg-slate-800"
                >
                  India
                </option>
                <option value="" className="bg-white dark:bg-slate-800">
                  Bangladesh
                </option>
                <option value="" className="bg-white dark:bg-slate-800">
                  Sri Lanka
                </option>
                <option value="" className="bg-white dark:bg-slate-800">
                  Nepal
                </option>
                <option value="" className="bg-white dark:bg-slate-800">
                  Bhutan
                </option>
                <option value="" className="bg-white dark:bg-slate-800">
                  Myanmar
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="w-full flex flex-col mb-6">
            <label htmlFor="email" className="font-medium mb-2">
              GENDER:
            </label>
            <div className="w-full">
              <select
                type="text"
                className="w-full bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 opacity-80"
              >
                <option
                  value=""
                  selected
                  className="bg-white dark:bg-slate-800"
                >
                  Male
                </option>
                <option value="" className="bg-white dark:bg-slate-800">
                  Female
                </option>
                <option value="" className="bg-white dark:bg-slate-800">
                  Others
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="form-group flex items-center h-full mb-3 mt-2">
            <div>
              <input className="" type="checkbox" value="" id="remember-me" />
              <label className="font-medium" htmlFor="remember-me">
                I agree all statements in
                <a href="#!" className="underline hover:text-blue-600">
                  Terms & Conditions
                </a>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex md:justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-600 py-4 px-10 text-white hover:bg-opacity-95 duration-300"
            >
              Register <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const Register = () => {
  return (
    <section
      className="ezy__signup16 light relative flex items-center justify-center py-14 md:py-24 text-zinc-900 dark:text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Register.jpg')",
        minHeight: "100vh",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex justify-center">
          <div className="w-full md:w-2/3">
            <div className="bg-white dark:bg-slate-800 shadow-xl p-4">
              <div className="border dark:border-gray-600 p-6 lg:p-12">
                <h2 className="text-3xl font-bold mb-2 text-center">
                  REGISTRATION FORM
                </h2>

                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
