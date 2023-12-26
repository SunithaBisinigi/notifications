import React from 'react'
import { Link } from "react-router-dom";

const ManagerPage = () => {
  return (
    <div>
      <h1> ManagerPage</h1>
      <Link to="/notification">Notification</Link>
    </div>
  );
}

export default ManagerPage;