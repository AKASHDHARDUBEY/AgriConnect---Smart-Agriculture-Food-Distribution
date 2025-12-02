// src/components/CropListing.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./CropListing.css";

export default function CropListing({ searchTerm = "" }) {
  const [crops, setCrops] = useState([]);
  const [filterLocation, setFilterLocation] = useState("");

  useEffect(() => {
    loadCrops();
    window.addEventListener("storage", loadCrops);
    return () => window.removeEventListener("storage", loadCrops);
  }, []);

  const loadCrops = () => {
    const savedCrops = JSON.parse(localStorage.getItem("cropListings") || "[]");
    setCrops(savedCrops);
  };

  useEffect(() => {
    const interval = setInterval(loadCrops, 1000);
    return () => clearInterval(interval);
  }, []);

  const filteredCrops = crops.filter(crop => {
    const matchesSearch = crop.cropName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         crop.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !filterLocation || crop.location.toLowerCase().includes(filterLocation.toLowerCase());
    return matchesSearch && matchesLocation;
  });

  const handleContact = (contact) => {
    if (!contact) return alert("No contact number provided.");
    window.open(`tel:${contact}`, "_self");
  };

  // simple list animation variants
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" } }
  };

  return (
    <div className="crop-listing-container">
      {/* header + filters (same as before) */}
      <div className="listing-header">
        <h1 className="listing-title">🌾 Browse Crop Listings</h1>
        <p className="listing-subtitle">Buy directly from farmers at fair prices</p>
      </div>

      <div className="search-filter-bar">
        <div className="filter-box">
          <svg className="filter-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          <input
            type="text"
            placeholder="Filter by location..."
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className="filter-input"
          />
        </div>
      </div>

      <div className="results-info">
        {filteredCrops.length > 0 ? (
          <p>Found {filteredCrops.length} {filteredCrops.length === 1 ? 'listing' : 'listings'}</p>
        ) : (
          <p>No listings found. Be the first to list your crop!</p>
        )}
      </div>

      {filteredCrops.length > 0 ? (
        <motion.div className="crop-grid" variants={listVariants} initial="hidden" animate="visible">
          {filteredCrops.map((crop, idx) => (
            <motion.article key={crop.id || idx} className="crop-card" variants={itemVariants} whileHover={{ y: -6, scale: 1.01 }}>
              <div className="crop-image-container">
                {crop.image ? <img src={crop.image} alt={crop.cropName} className="crop-image" /> :
                  <div className="crop-image-placeholder">No Image</div>}
                <div className="crop-badge">📍 {crop.location}</div>
              </div>

              <div className="crop-card-content">
                <h3 className="crop-name">{crop.cropName}</h3>
                <p className="crop-location">📍 {crop.location}</p>
                <p className="crop-quantity">📦 {crop.quantity}</p>
                {crop.description && <p className="crop-description">{crop.description.substring(0,80)}...</p>}

                <div className="crop-footer">
                  <div className="crop-price">
                    <span className="price-amount">₹{crop.price}</span>
                    <span className="price-unit">/kg</span>
                  </div>
                  <button className="contact-btn" onClick={() => handleContact(crop.contact)}>📞 Contact</button>
                </div>

                <div className="crop-date">Posted: {crop.datePosted}</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      ) : (
        <div className="empty-state">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="empty-icon">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <h3>No crops listed yet</h3>
          <p>Start by listing your first crop!</p>
        </div>
      )}
    </div>
  );
}
