// UserNotification.js
import React, { useState, useEffect } from "react";

const UserNotification = ({ approvalStatus }) => {
  const [notificationStatus, setNotificationStatus] = useState("");

  useEffect(() => {
    if (approvalStatus) {
      setNotificationStatus(`Notification Status: ${approvalStatus}`);
    }
  }, [approvalStatus]);

  return (
    <div>
      <p>{notificationStatus}</p>
      {/* ... (other code) */}
    </div>
  );
};

export default UserNotification;
