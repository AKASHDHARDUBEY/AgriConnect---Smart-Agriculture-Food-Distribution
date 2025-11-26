import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import Navbar from "./components/Navbar";
import CropUploadForm from './components/CropUploadForm';
import CropListing from './components/CropListing';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import LandingHero from "./components/LandingHero";

// Layout wrapper
function MainLayout({ children, searchTerm, setSearchTerm }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="app-main" style={{ marginLeft: 240 }}>
        <TopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="app-content">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleCropAdded = () => {
    setRefreshKey(prev => prev + 1);
    navigate('/');
  };

  return (
    <div className="App">

      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <MainLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <>
                <LandingHero />
                <CropListing key={refreshKey} searchTerm={searchTerm} />
              </>
            </MainLayout>
          }
        />

        {/* UPLOAD PAGE */}
        <Route
          path="/upload"
          element={
            <MainLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <CropUploadForm onCropAdded={handleCropAdded} />
            </MainLayout>
          }
        />

        {/* FALLBACK */}
        <Route
          path="*"
          element={
            <MainLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
              <CropListing key={refreshKey} searchTerm={searchTerm} />
            </MainLayout>
          }
        />
      </Routes>

      <footer className="app-footer">
        <p>© 2024 AgriConnect - Connecting Farmers, Buyers & Communities</p>
      </footer>

    </div>
  );
}
