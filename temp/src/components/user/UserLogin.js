// import React, { useState } from "react";
// import { redirect } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// const LoginForm = () => {
//   const [email, setemail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await fetch("http://your-api-endpoint/login/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         console.log("Login successful!");
//         navigate("/userhome");
//         // Redirect to user dashboard or perform other actions
//       } else {
//         console.error("Login failed.");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>User Login</h2>
//       <label>
//         email:
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setemail(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <br />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://your-api-endpoint/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Login successful!");
        navigate("/userhome");
        // Redirect to user dashboard or perform other actions
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
        email:
        <input
          type="text"
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
