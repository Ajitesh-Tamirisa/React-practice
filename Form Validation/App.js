import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [dob, setDob] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    let isValid = true;
    let updatedErrors = {};
    if (name.trim().length === 0) {
      updatedErrors.nameError = "Name is a required field";
      isValid = false;
    }
    if (email.trim().length === 0 && !/\S+@\S+\.\S+/.test(email)) {
      updatedErrors.emailError = "Email is a required field";
      isValid = false;
    }
    if (id.trim().length === 0) {
      updatedErrors.idError = "ID is a required field";
      isValid = false;
    }
    if (dob.trim().length === 0) {
      updatedErrors.dobError = "Date of Birth is a required field";
      isValid = false;
    }
    setErrors(updatedErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, id, dob };
    if (validate()) console.log("Form has been submitted\n", formData);
  };
  return (
    <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
      <h2>Employee Form</h2>
      <div className="formField">
        <label>Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.nameError && <p className="error">{errors.nameError}</p>}
      </div>
      <div className="formField">
        <label>Email:</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.emailError && <p className="error">{errors.emailError}</p>}
      </div>
      <div className="formField">
        <label>ID:</label>
        <br />
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        {errors.idError && <p className="error">{errors.idError}</p>}
      </div>
      <div className="formField">
        <label>Date of Birth:</label>
        <br />
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        {errors.dobError && <p className="error">{errors.dobError}</p>}
      </div>
      <div className="formField">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
