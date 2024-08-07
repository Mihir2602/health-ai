import React from "react";
import { useNotifications } from "../context/NotificationContext";
import { XIcon } from "@heroicons/react/solid";

const Notification = ({ notification, onClose }) => {
  const bgColor =
    {
      info: "bg-blue-500",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      error: "bg-red-500",
    }[notification.type] || "bg-gray-500";

  return (
    <div className={`${bgColor} text-white px-4 py-3 rounded relative mb-2`}>
      <span className="block sm:inline">{notification.message}</span>
      <span
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
        onClick={onClose}
      >
        <XIcon className="h-6 w-6 text-white" />
      </span>
    </div>
  );
};

const Notifications = () => {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div className="fixed top-5 right-5 w-72 z-50">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
};

export default Notifications;