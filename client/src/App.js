import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';

import LandingHero from "./components/LandingHero";
import Marketplace from "./pages/Marketplace";
import CropUploadForm from './components/CropUploadForm';


// ----------- MAIN LAYOUT WRAPPER -----------
function MainLayout({ children, searchTerm, setSearchTerm }) {
  return (
    <div className="app-layout">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="app-main">
        <TopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Page Wrapper */}
        <div className="page-area">
          {children}
        </div>
      </main>

    </div>
  );
}


// ---------------- MAIN APP ----------------
export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleCropAdded = () => {
    navigate('/');
  };

  return (
    <div className="App">

      {/* NAVBAR */}
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
              <CropUploadForm onCropAdded={handleCropAdded} />
            </MainLayout>
          }
        />

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
