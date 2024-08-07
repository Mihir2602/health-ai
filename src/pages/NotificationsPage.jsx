import React from "react";
import { useNotifications } from "../context/NotificationContext";

const NotificationsPage = () => {
  const { notifications, removeNotification, clearAllNotifications } = useNotifications();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      {notifications.length === 0 ? (
        <p className="text-gray-500">No new notifications</p>
      ) : (
        <>
          {notifications.map((notification) => (
            <div key={notification.id} className="mb-4 p-3 bg-white rounded-lg shadow">
              <p className="text-sm text-gray-800">{notification.message}</p>
              <button
                onClick={() => removeNotification(notification.id)}
                className="mt-2 text-xs text-blue-500 hover:text-blue-700"
              >
                Dismiss
              </button>
            </div>
          ))}
          <button
            onClick={clearAllNotifications}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Clear All
          </button>
        </>
      )}
    </div>
  );
};

export default NotificationsPage;