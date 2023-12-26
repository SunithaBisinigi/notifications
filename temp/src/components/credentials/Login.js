import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        console.log("Login successful!", response);
        navigate("/userhome");

        // Optionally, you can read the cookie to get the access token
        const accessToken = document.cookie
          .split("; ")
          .find((row) => row.startsWith("access_token="))
          .split("=")[1];

        console.log("Access Token:", accessToken);
        // Redirect to dashboard or perform other actions
      } else {
        console.error("Login failed.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };


  return (
    <div>
      <h2>User Login</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
