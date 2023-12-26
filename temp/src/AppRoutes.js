// Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import UserPage from "./components/user/UserPage";
import UserForm from "./components/user/UserForm";
import UserNotification from "./components/user/UserNotification";
import ManagerPage from "./components/manager/ManagerPage";
import Notification from "./components/manager/Notification";
import Registration from "./components/credentials/Registration";
import Login from "./components/credentials/Login";
import UserHome from './components/user/UserHome';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/form" element={<UserForm />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/usernotification" element={<UserNotification />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/manager" element={<ManagerPage />} />
        <Route path="/manager/login" element={<Login />} />
        <Route path="/manager/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
