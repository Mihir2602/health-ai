import React from "react";
import {
  HeartIcon,
  ClipboardListIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import { useNotifications } from '../context/NotificationContext';
const StatCard = ({ title, value, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center">
      <div className="p-3 rounded-full bg-blue-500 bg-opacity-75">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div className="ml-4">
        <p className="mb-2 text-sm font-medium text-gray-600">{title}</p>
        <p className="text-lg font-semibold text-gray-700">{value}</p>
      </div>
    </div>
  </div>
);

const DashboardHome = () => {
  
  const { addNotification } = useNotifications();
  
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Your Health Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Health Score" value="85/100" icon={HeartIcon} />
        <StatCard title="Completed Check Ups" value="3" icon={ClipboardListIcon} />
        <StatCard title="Upcoming Appointments" value="2" icon={CalendarIcon} />
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activities
        </h3>
        <ul className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
          <li className="p-4">
            <p className="text-sm font-medium text-gray-900">
              Completed Diabetes Risk Assessment
            </p>
            <p className="text-sm text-gray-500">2 days ago</p>
          </li>
          <li className="p-4">
            <p className="text-sm font-medium text-gray-900">
              Booked appointment with Dr. Smith
            </p>
            <p className="text-sm text-gray-500">5 days ago</p>
          </li>
          <li className="p-4">
            <p className="text-sm font-medium text-gray-900">
              Updated personal information
            </p>
            <p className="text-sm text-gray-500">1 week ago</p>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Recommended Health Forms
        </h3>
        <ul className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
          <li className="p-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Annual Health Checkup Questionnaire
            </a>
          </li>
          <li className="p-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Mental Health Assessment
            </a>
          </li>
          <li className="p-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Nutrition and Lifestyle Survey
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHome;