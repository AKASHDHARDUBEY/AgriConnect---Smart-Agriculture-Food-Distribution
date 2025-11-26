import React, { useState } from "react";
import AuthCard from "../components/AuthCard";
import "./AuthPages.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();
    console.log("Admin Login:", { email, password });
  };

  return (
    <AuthCard
      title="Admin Panel 🔐"
      subtitle="Authorized access only"
    >
      <form onSubmit={handleAdminLogin}>

        <input 
          type="email" 
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input 
          type="password" 
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="auth-btn" type="submit">Login as Admin</button>

        <span 
          className="auth-link"
          onClick={() => window.location.href = "/login"}
        >
          User Login
        </span>
      </form>
    </AuthCard>
  );
}
