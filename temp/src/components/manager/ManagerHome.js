// UserPage.js
import React from "react";

import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <div>
      <h2>User Page</h2>
      <nav>
        <li>
          <Link to="/manager/registration">Registration</Link>
        </li>
        <li>
          <Link to="/manager/login">Login</Link>
        </li>
      </nav>
    </div>
  );
};

export default UserPage;
