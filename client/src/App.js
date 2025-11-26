import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

/* GLOBAL COMPONENTS */
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

/* HOME PAGE COMPONENTS */
import LandingHero from "./components/LandingHero";
import Marketplace from "./pages/Marketplace";

/* UPLOAD PAGE */
import UploadPage from "./pages/UploadPage";

/* AUTH PAGES */
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminLogin from "./pages/AdminLogin";

/* ========================= */
/* MAIN LAYOUT FOR DASHBOARD */
/* ========================= */
function MainLayout({ children, searchTerm, setSearchTerm }) {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="app-main">
        <TopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="page-area">{children}</div>
      </main>
    </div>
  );
}

/* ============= */
/* ROOT APP FILE */
/* ============= */
export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleCropAdded = () => {
    navigate("/");
  };

  return (
    <div className="App">
      {/* NAVBAR ALWAYS VISIBLE */}
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <MainLayout
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            >
              <>
                <LandingHero />
                <Marketplace searchTerm={searchTerm} />
              </>
            </MainLayout>
          }
        />

        {/* UPLOAD PAGE */}
        <Route
          path="/upload"
          element={
            <MainLayout
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            >
              <UploadPage onCropAdded={handleCropAdded} />
            </MainLayout>
          }
        />

        {/* ========================= */}
        {/* AUTH PAGES (NO SIDEBAR)  */}
        {/* ========================= */}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<AdminLogin />} />

        {/* FALLBACK */}
        <Route
          path="*"
          element={
            <MainLayout
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            >
              <>
                <LandingHero />
                <Marketplace searchTerm={searchTerm} />
              </>
            </MainLayout>
          }
        />
      </Routes>

      {/* FOOTER */}
      <footer className="app-footer">
        <p>© 2024 AgriConnect - Connecting Farmers, Buyers & Communities</p>
      </footer>
    </div>
  );
}
