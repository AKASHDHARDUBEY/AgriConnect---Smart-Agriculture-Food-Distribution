import React, { useState } from 'react';
import './App.css';
import CropUploadForm from './components/CropUploadForm';
import CropListing from './components/CropListing';

function App() {
  const [currentView, setCurrentView] = useState('listings');
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCropAdded = () => {
    // Switch to listings view and refresh
    setCurrentView('listings');
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="App">
      {/* Navigation Header */}
      <nav className="app-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <h1>🌾 AgriConnect</h1>
            <span className="nav-tagline">Smart Agriculture Platform</span>
          </div>
          <div className="nav-links">
            <button 
              className={`nav-link ${currentView === 'listings' ? 'active' : ''}`}
              onClick={() => setCurrentView('listings')}
            >
              📋 Browse Crops
            </button>
            <button 
              className={`nav-link ${currentView === 'upload' ? 'active' : ''}`}
              onClick={() => setCurrentView('upload')}
            >
              ➕ List Your Crop
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="app-main">
        {currentView === 'listings' ? (
          <CropListing key={refreshKey} />
        ) : (
          <CropUploadForm onCropAdded={handleCropAdded} />
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2024 AgriConnect - Connecting Farmers, Buyers & Communities</p>
      </footer>
    </div>
  );
}

export default App;
