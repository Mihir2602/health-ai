import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  MenuIcon,
  BellIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useNotifications } from "../context/NotificationContext";
import Notifications from "./Notifications";

const sidebarLinks = [
  { name: "Dashboard", icon: HomeIcon, path: "Dashboard/" },
  { name: "Check Up", icon: UserGroupIcon, path: "DashBoard/patients" },
  { name: "Analytics", icon: ChartBarIcon, path: "Dashboard/analytics" },
  { name: "Notifications", icon: BellIcon, path: "Dashboard/notifications" },
  { name: "Settings", icon: CogIcon, path: "Dashboard/settings" },
];

const SidebarLink = ({ icon: Icon, name, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      className={`flex items-center space-x-2 px-4 py-3 rounded transition-colors ${
        isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-blue-100"
      }`}
    >
      <Icon className="w-6 h-6" />
      <span>{name}</span>
    </Link>
  );
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { notifications, removeNotification, clearAllNotifications } = useNotifications();

  return (
    <div>
      <div className="flex h-[calc(100vh-57px)] bg-gray-100">
        {/* Sidebar */}
        <aside
          className={`
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          fixed inset-y-[57px] left-0 z-40 w-64 bg-white shadow-lg transform 
          transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto
          lg:sticky lg:top-[57px] lg:h-[calc(100vh-57px)]
        `}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-500 focus:outline-none lg:hidden"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-5">
            {sidebarLinks.map((link) => (
              <SidebarLink key={link.name} {...link} />
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Toggle button for mobile */}
          <div className="lg:hidden p-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-500 focus:outline-none"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Page Content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            <Outlet />
          </main>

          {/* Footer with Notification and Profile Icons */}
          <footer className="bg-white border-t p-4">
            <div className="flex justify-end space-x-4">
              <Link to="Dashboard/notifications" className="text-gray-500 focus:outline-none relative">
                <BellIcon className="h-6 w-6" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </Link>
              <button className="text-gray-500 focus:outline-none">
                <UserCircleIcon className="h-6 w-6" />
              </button>
            </div>
          </footer>
        </div>
      </div>
      <Notifications />
    </div>
  );
};

export default Dashboard;