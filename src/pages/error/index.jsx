import "./error.css";

const Error = ({ status, message = "Page not Found" }) => {
  return (
    <div className="error-container">
      <div className="statusCode">{status}</div>
      <div>{message}</div>
    </div>
  );
};

export default Error;
