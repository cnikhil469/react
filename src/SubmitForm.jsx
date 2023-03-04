import React, { useState } from "react";
import "./forms.scss";
const SubmitForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-us">
      <form action="" onSubmit={submitForm}>
        <div className="form-content">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-content">
          <input
            type="email"
            name="email
            "
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-content">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-content">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
