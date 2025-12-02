import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // DARK MODE STATE
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch {
      return false;
    }
  });

  // APPLY THEME ON LOAD + WHEN CHANGED
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div
          className="navbar-logo"
          onClick={() => navigate("/")}
        >
          <span className="logo-icon">🌾</span>
          <span className="logo-text">AgriConnect</span>
        </div>

        {/* DESKTOP NAV LINKS */}
        <nav className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/marketplace" className="nav-link">Marketplace</Link>
          <Link to="/farm" className="nav-link">Farmer Dashboard</Link>
          {user ? (
            <div className="nav-user-menu" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span className="user-name" style={{ fontWeight: 'bold' }}>Hello, {user.name?.split(' ')[0]}</span>
              <button
                onClick={logout}
                className="logout-btn"
                style={{
                  background: 'none',
                  border: '1px solid #ff4444',
                  color: '#ff4444',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="nav-link">Login</Link>
          )}

          <Link to="/upload" className="sell-btn">+ Sell Crop</Link>

          {/* DARK MODE TOGGLE */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
        </nav>

        {/* MOBILE MENU ICON */}
        <div
          className="mobile-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </div>

      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="mobile-dropdown">
          <Link to="/" onClick={() => setMenuOpen(false)} className="mobile-link">Home</Link>
          <Link to="/marketplace" onClick={() => setMenuOpen(false)} className="mobile-link">Marketplace</Link>
          <Link to="/farm" onClick={() => setMenuOpen(false)} className="mobile-link">Farmer Dashboard</Link>
          <Link to="/upload" onClick={() => setMenuOpen(false)} className="mobile-sell-btn">+ Sell Crop</Link>

          {user ? (
            <>
              <div className="mobile-link" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
                👤 {user.name}
              </div>
              <button
                onClick={() => { logout(); setMenuOpen(false); }}
                className="mobile-link"
                style={{ color: '#ff4444', textAlign: 'left', width: '100%', background: 'none', border: 'none' }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)} className="mobile-link">Login</Link>
          )}

          {/* Mobile Dark mode toggle */}
          <button
            className="mobile-theme-toggle"
            onClick={() => { toggleTheme(); setMenuOpen(false); }}
          >
            {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
      )}

    </header>
  );
}

