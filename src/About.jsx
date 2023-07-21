import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/contact");
  };
  return (
    <div>
      <h2>About</h2>
      <button type="submit" onClick={navigateToHome}>
        To Home
      </button>
    </div>
  );
};

export default About;
