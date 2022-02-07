import React from "react";

const ErrorMessage = ({ error }) => {
  return <div className="text-danger">{error}</div>;
};

export default ErrorMessage;
