import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>404 Not Found</h2>
      <button onClick={navigateToHome}>To Home</button>
    </div>
  );
};

export default NotFound;
