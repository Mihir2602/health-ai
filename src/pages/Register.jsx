import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs'
import {
  faArrowRight,
  faAt,
  faLock,
  faUser,
  faCalendar,
  faRuler,
  faWeight,
  faAllergies,
  faDumbbell,
  faUtensils,
  faSmoking,
  faWineGlass,
  faUsers,
  faPills,
} from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    dob: '',
    height: '',
    weight: '',
    allergies: '',
    fitness: '',
    diet: '',
    smoking: '',
    alcohol: '',
    familyHistory: '',
    medications: '',
    country: 'India',
    gender: 'Male',
    question: '',
  });
  
  const [validated, setValidated] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        // Create a new formData object without hashing the password
        const dataToSubmit = { ...formData };

        // Make the POST request
        const response = await axios.post('http://localhost:5000/register', dataToSubmit);
        console.log(response.data);
        console.log(formData)
        alert('User registered successfully!');
        navigate('/login');
      } catch (error) {
        console.error('There was an error registering the user!', error);
        alert('Failed to register user');
      }
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
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              id="password"
              placeholder=""
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={faLock}
              className="absolute top-12 text-sm left-4 opacity-80"
            />
          </div>
        </div>
        

{/* New fields */}
<div className="w-full md:w-1/2 px-2">
  <div className="w-full flex flex-col relative mb-6">
    <label className="opacity-80 font-medium mb-2" htmlFor="dob">
      DATE OF BIRTH:
    </label>
    <input
      type="date"
      className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10"
      id="dob"
      name="dob"
      value={formData.dob}
      onChange={handleChange}
    />
    <FontAwesomeIcon
      icon={faCalendar}
      className="absolute top-12 text-sm left-4 opacity-80"
    />
  </div>
</div>

<div className="w-full md:w-1/2 px-2">
  <div className="w-full flex flex-col relative mb-6">
    <label className="opacity-80 font-medium mb-2" htmlFor="height">
      HEIGHT (cm):
    </label>
    <input
      type="number"
      className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10"
      id="height"
      name="height"
      value={formData.height}
      onChange={handleChange}
    />
    <FontAwesomeIcon
      icon={faRuler}
      className="absolute top-12 text-sm left-4 opacity-80"
    />
  </div>
</div>

<div className="w-full md:w-1/2 px-2">
  <div className="w-full flex flex-col relative mb-6">
    <label className="opacity-80 font-medium mb-2" htmlFor="weight">
      WEIGHT (kg):
    </label>
    <input
      type="number"
      className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10"
      id="weight"
      name="weight"
      value={formData.weight}
      onChange={handleChange}
    />
    <FontAwesomeIcon
      icon={faWeight}
      className="absolute top-12 text-sm left-4 opacity-80"
    />
  </div>
</div>

<div className="w-full md:w-1/2 px-2">
  <div className="w-full flex flex-col relative mb-6">
    <label className="opacity-80 font-medium mb-2" htmlFor="allergies">
      ALLERGIES:
    </label>
    <input
      type="text"
      className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10"
      id="allergies"
      placeholder="Separate with commas"
      name="allergies"
      value={formData.allergies}
      onChange={handleChange}
    />
    <FontAwesomeIcon
      icon={faAllergies}
      className="absolute top-12 text-sm left-4 opacity-80"
    />
  </div>
</div>

<div className="w-full md:w-1/2 px-2">
  <div className="w-full flex flex-col mb-6">
    <label htmlFor="fitness" className="font-medium mb-2">
      FITNESS LEVEL:
    </label>
    <div className="w-full relative">
      <select
        id="fitness"
        name="fitness"
        value={formData.fitness}
          onChange={handleChange}
        className="w-full bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10 opacity-80"
      >
        <option value="" selected className="bg-white dark:bg-slate-800">Select</option>
        <option value="sedentary" className="bg-white dark:bg-slate-800">Sedentary</option>
        <option value="light" className="bg-white dark:bg-slate-800">Lightly Active</option>
        <option value="moderate" className="bg-white dark:bg-slate-800">Moderately Active</option>
        <option value="very" className="bg-white dark:bg-slate-800">Very Active</option>
      </select>
      <FontAwesomeIcon
        icon={faDumbbell}
        className="absolute top-4 text-sm left-4 opacity-80"
      />
    </div>
  </div>
</div>

<div className="w-full md:w-1/2 px-2">
  <div className="w-full flex flex-col mb-6">
    <label htmlFor="diet" className="font-medium mb-2">
      DIETARY PREFERENCES:
    </label>
    <div className="w-full relative">
      <select
        id="diet"
        name="diet"
value={formData.diet}
onChange={handleChange}
        className="w-full bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10 opacity-80"
      >
        <option value="" selected className="bg-white dark:bg-slate-800">Select</option>
        <option value="no_restrictions" className="bg-white dark:bg-slate-800">No Restrictions</option>
        <option value="vegetarian" className="bg-white dark:bg-slate-800">Vegetarian</option>
        <option value="vegan" className="bg-white dark:bg-slate-800">Vegan</option>
        <option value="pescatarian" className="bg-white dark:bg-slate-800">Pescatarian</option>
      </select>
      <FontAwesomeIcon
        icon={faUtensils}
        className="absolute top-4 text-sm left-4 opacity-80"
      />
    </div>
  </div>
</div>

<div className="w-full md:w-1/2 px-2">
  <div className="w-full flex flex-col mb-6">
    <label htmlFor="smoking" className="font-medium mb-2">
      SMOKING STATUS:
    </label>
    <div className="w-full relative">
      <select
        id="smoking"
        name="smoking"
value={formData.smoking}
onChange={handleChange}
        className="w-full bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10 opacity-80"
      >
        <option value="" selected className="bg-white dark:bg-slate-800">Select</option>
        <option value="non_smoker" className="bg-white dark:bg-slate-800">Non-smoker</option>
        <option value="smoker" className="bg-white dark:bg-slate-800">Smoker</option>
        <option value="former_smoker" className="bg-white dark:bg-slate-800">Former Smoker</option>
      </select>
      <FontAwesomeIcon
        icon={faSmoking}
        className="absolute top-4 text-sm left-4 opacity-80"
      />
    </div>
  </div>
</div>

<div className="w-full md:w-1/2 px-2">
  <div className="w-full flex flex-col mb-6">
    <label htmlFor="alcohol" className="font-medium mb-2">
      ALCOHOL CONSUMPTION:
    </label>
    <div className="w-full relative">
      <select
        id="alcohol"
        name="alcohol"
value={formData.alcohol}
onChange={handleChange}
        className="w-full bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 pl-10 opacity-80"
      >
        <option value="" selected className="bg-white dark:bg-slate-800">Select</option>
        <option value="none" className="bg-white dark:bg-slate-800">None</option>
        <option value="occasional" className="bg-white dark:bg-slate-800">Occasional</option>
        <option value="moderate" className="bg-white dark:bg-slate-800">Moderate</option>
        <option value="heavy" className="bg-white dark:bg-slate-800">Heavy</option>
      </select>
      <FontAwesomeIcon
        icon={faWineGlass}
        className="absolute top-4 text-sm left-4 opacity-80"
      />
    </div>
  </div>
</div>

<div className="w-full px-2">
  <div className="w-full flex flex-col relative mb-6">
    <label className="opacity-80 font-medium mb-2" htmlFor="family-history">
      FAMILY HISTORY:
    </label>
    <textarea
      className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[100px] leading-none px-3 pl-10 py-2"
      id="family-history"
      name="familyHistory"
value={formData.familyHistory}
onChange={handleChange}
      placeholder="Please enter any relevant family medical history"
    ></textarea>
    <FontAwesomeIcon
      icon={faUsers}
      className="absolute top-12 text-sm left-4 opacity-80"
    />
  </div>
</div>

<div className="w-full px-2">
  <div className="w-full flex flex-col relative mb-6">
    <label className="opacity-80 font-medium mb-2" htmlFor="medications">
      CURRENT MEDICATIONS:
    </label>
    <textarea
      className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[100px] leading-none px-3 pl-10 py-2"
      id="medications"
      name="medications"
value={formData.medications}
onChange={handleChange}
      placeholder="Please list your current medications"
    ></textarea>
    <FontAwesomeIcon
      icon={faPills}
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
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 opacity-80"
              >
                <option
                  value="India"
                  className="bg-white dark:bg-slate-800"
                >
                  India
                </option>
                <option value="Bangladesh" className="bg-white dark:bg-slate-800">
                  Bangladesh
                </option>
                <option value="Srilanka" className="bg-white dark:bg-slate-800">
                  Sri Lanka
                </option>
                <option value="Nepal" className="bg-white dark:bg-slate-800">
                  Nepal
                </option>
                <option value="Bhutan" className="bg-white dark:bg-slate-800">
                  Bhutan
                </option>
                <option value="Myanmar" className="bg-white dark:bg-slate-800">
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
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[48px] leading-none px-3 opacity-80"
              >
                <option
                  value="Male"
                  className="bg-white dark:bg-slate-800"
                >
                  Male
                </option>
                <option value="Female" className="bg-white dark:bg-slate-800">
                  Female
                </option>
                <option value="Others" className="bg-white dark:bg-slate-800">
                  Others
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full px-2">
  <div className="w-full flex flex-col relative mb-6">
    <label className="opacity-80 font-medium mb-2" htmlFor="medications">
      Security Question : What was your favorite subject in high school?
    </label>
    <textarea
      className="bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 duration-300 min-h-[10px] leading-none px-3 pl-10 py-2"
      id="question"
      name="question"
value={formData.question}
onChange={handleChange}
      placeholder="What was your favorite subject in high school?"
    ></textarea>
    <FontAwesomeIcon
      icon={faPills}
      className="absolute top-12 text-sm left-4 opacity-80"
    />
  </div>
</div>
        
        <div className="w-full md:w-1/2 ml-16">
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