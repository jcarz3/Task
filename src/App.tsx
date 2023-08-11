import React, { useState } from "react";
import { createContext } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import logo from "./images/logo.png";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import AboutUsPage from "./components/about-us/AboutUs";
import ContactUsPage from "./components/contact-us/ContactUs";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const themeContextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue as unknown as null}>
      <div className="App" id={theme}>
        <div className="header">
          <div className="h1-header">
            <NavLink to="/home" className="home-link">
              <img src={logo} alt="" style={{}} />
            </NavLink>
            <NavLink to="/home" className="home-link">
              <h1 style={{ fontSize: "30px", fontFamily: "monospace" }}>
                4.20 Pizzeria
              </h1>
            </NavLink>
          </div>
          <div className="content">
            <div className="right_theme" onClick={toggleTheme}>
              {theme === "light" ? (
                <FiMoon className="moon" title="Dark Mode" />
              ) : (
                <BsSun className="sun" title="Light Mode" />
              )}
            </div>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "not-active")}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "not-active")}
              to="/about-us"
            >
              About Us
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "not-active")}
              to="/contact-us"
            >
              Contact Us{" "}
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
        <Routes>
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
