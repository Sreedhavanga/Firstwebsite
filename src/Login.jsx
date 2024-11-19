// Login.jsx
import React from "react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "#1aff1a", marginBottom: "20px" }}>Login</h2>

      <form style={{ maxWidth: "400px", width: "100%" }}>
        <label style={{ fontSize: "1rem", marginBottom: "5px" }}>Username:</label>
        <input
          type="text"
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <label style={{ fontSize: "1rem", marginBottom: "5px" }}>Password:</label>
        <input
          type="password"
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#1aff1a",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login; // <-- Ensure this line is added

  