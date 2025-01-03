import React from "react";
import "../index.css";


const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">404 Not Found</h1>
        <p className="error-message">
          Your visited page not found. You may go home page.
        </p>
        <button className="home-button" onClick={() => (window.location.href = "/Home")}>Back to home page</button>
      </div>
    </div>
  );
};

export default ErrorPage;