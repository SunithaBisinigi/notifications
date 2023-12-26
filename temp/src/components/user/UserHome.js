// UserHome.js
import React from "react";
import { Link } from "react-router-dom";

const UserHome = () => {
  return (
    <div>
      <h2>User Home</h2>
      <nav>
        <li>
          <Link to="/user/form">Form</Link>
        </li>
        <li>
          <Link to="/usernotification">UserNotification</Link>
        </li>
      </nav>
    </div>
  );
};

export default UserHome;

