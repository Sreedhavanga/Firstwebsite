import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";

// Import Components
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import TFI from "./TFI";
import Login from "./Login";

const App = () => {
  return (
    // Wrap your entire App component inside the Router
    <Router>
      <div>
        {/* Header Section */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            backgroundColor: "#f1f1f1",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Left - Logo */}
          <img
            src="https://via.placeholder.com/80"
            alt="Logo"
            style={{ height: "50px", cursor: "pointer" }}
          />

          {/* Center - Heading */}
          <h1 style={{ margin: 0, fontSize: "24px", textAlign: "center", flex: 1 }}>
            NSS Vasavi College of Engineering
          </h1>

          {/* Right - Login Button */}
          <LoginButton />
        </header>

        {/* Navigation Bar */}
        <nav style={{ backgroundColor: "#333", padding: "10px", position: "sticky", top: 0, zIndex: 1000 }}>
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              margin: 0,
              padding: 0,
              justifyContent: "space-around",
            }}
          >
            <li>
              <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/tfi" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
                TFI
              </Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tfi" element={<TFI />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

// Create a Login Button component for reuse
const LoginButton = () => {
  const navigate = useNavigate();
  
  return (
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
      onClick={() => navigate("/login")}
    >
      Login
    </button>
  );
};

export default App;
