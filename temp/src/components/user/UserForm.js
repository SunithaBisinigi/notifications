import React, { useState, useEffect } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    qualifications: "",
    skills: "",
    languages: "",
    address: "",
  });
  const [csrfToken, setCsrfToken] = useState("");
  console.log("CSRF Token:", csrfToken);
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/get-csrf-token/");
        if (response.ok) {
          const data = await response.json();
          setCsrfToken(data.csrf_token);
          
        } else {
          console.error("Failed to fetch CSRF token");
        }
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    fetchCsrfToken();
  }, []); // Run this effect only once on component mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/userprofiles/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken, // Include the CSRF token in the headers
          },
          credentials: "include", // Include credentials in the request
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully!");
        setFormData({
          qualifications: "",
          skills: "",
          languages: "",
          address: "",
        });
        alert("Form submitted successfully. Wait for the Approval");
        // Optionally, you can reset the form or perform other actions here
      } else {
        console.error("Form submission failed.", JSON.stringify(formData));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <>
      <h1>User Profile Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Qualifications:
          <input
            type="text"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Skills:
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Languages:
          <input
            type="text"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserForm;
