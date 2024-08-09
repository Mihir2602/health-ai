import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
import axios from "axios";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    dob: "",
    height: "",
    weight: "",
    allergies: "",
    fitnessLevel: "",
    dietaryPreferences: "",
    smokingStatus: "",
    alcoholConsumption: "",
    familyHistory: "",
    currentMedications: "",
    country: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Error fetching user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(`/api/users/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data.success) {
        alert("Profile updated successfully!");
      } else {
        alert("Error updating profile:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("An error occurred while updating the profile.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <FontAwesomeIcon icon={faUser} className="absolute left-3 top-9 text-gray-400" />
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <FontAwesomeIcon icon={faCalendar} className="absolute left-3 top-9 text-gray-400" />
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <FontAwesomeIcon icon={faRuler} className="absolute left-3 top-9 text-gray-400" />
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <FontAwesomeIcon icon={faWeight} className="absolute left-3 top-9 text-gray-400" />
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="allergies">
              Allergies
            </label>
            <input
              type="text"
              id="allergies"
              name="allergies"
              value={formData.allergies}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <FontAwesomeIcon icon={faAllergies} className="absolute left-3 top-9 text-gray-400" />
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fitnessLevel">
              Fitness Level
            </label>
            <select
              id="fitnessLevel"
              name="fitnessLevel"
              value={formData.fitnessLevel}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="sedentary">Sedentary</option>
              <option value="light">Lightly Active</option>
              <option value="moderate">Moderately Active</option>
              <option value="very">Very Active</option>
            </select>
            <FontAwesomeIcon icon={faDumbbell} className="absolute left-3 top-9 text-gray-400" />
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dietaryPreferences">
              Dietary Preferences
            </label>
            <select
              id="dietaryPreferences"
              name="dietaryPreferences"
              value={formData.dietaryPreferences}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="no_restrictions">No Restrictions</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="pescatarian">Pescatarian</option>
            </select>
            <FontAwesomeIcon icon={faUtensils} className="absolute left-3 top-9 text-gray-400" />
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="smokingStatus">
              Smoking Status
            </label>
            <select
              id="smokingStatus"
              name="smokingStatus"
              value={formData.smokingStatus}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="non_smoker">Non-smoker</option>
              <option value="smoker">Smoker</option>
              <option value="former_smoker">Former Smoker</option>
            </select>
            <FontAwesomeIcon icon={faSmoking} className="absolute left-3 top-9 text-gray-400" />
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alcoholConsumption">
              Alcohol Consumption
            </label>
            <select
              id="alcoholConsumption"
              name="alcoholConsumption"
              value={formData.alcoholConsumption}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="none">None</option>
              <option value="occasional">Occasional</option>
              <option value="moderate">Moderate</option>
              <option value="heavy">Heavy</option>
            </select>
            <FontAwesomeIcon icon={faWineGlass} className="absolute left-3 top-9 text-gray-400" />
          </div>

          <div className="relative col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="familyHistory">
              Family History
            </label>
            <textarea
              id="familyHistory"
              name="familyHistory"
              value={formData.familyHistory}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="3"
            ></textarea>
            <FontAwesomeIcon icon={faUsers} className="absolute left-3 top-9 text-gray-400" />
          </div>

          <div className="relative col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentMedications">
              Current Medications
            </label>
            <textarea
              id="currentMedications"
              name="currentMedications"
              value={formData.currentMedications}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="3"
            ></textarea>
            <FontAwesomeIcon icon={faPills} className="absolute left-3 top-9 text-gray-400" />
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;