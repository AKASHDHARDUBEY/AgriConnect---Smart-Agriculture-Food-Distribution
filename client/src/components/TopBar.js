import React, { useState } from 'react';
import './TopBar.css';

const TopBar = ({ currentView, setCurrentView, searchTerm, setSearchTerm }) => {
  const [location, setLocation] = useState('All India');

  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="top-bar-left">
          <span className="category-name">Crops</span>
          <div className="location-selector">
            <span className="location-icon">📍</span>
            <select 
              className="location-dropdown"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>All India</option>
              <option>Maharashtra</option>
              <option>Punjab</option>
              <option>Haryana</option>
              <option>Uttar Pradesh</option>
              <option>Karnataka</option>
              <option>Tamil Nadu</option>
            </select>
          </div>
        </div>
        
        <div className="top-bar-center">
          <div className="search-box-top">
            <svg className="search-icon-top" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder={`Search In ${location}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input-top"
            />
          </div>
        </div>

        <div className="top-bar-right">
          <button 
            className="sell-button"
            onClick={() => setCurrentView('upload')}
          >
            <span className="sell-icon">👤</span>
            Sell your Crop
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

