// src/App.jsx

import React from 'react';
// REMOVE: import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutUsSection from "./components/AboutUsSection.jsx";

const App = () => {
    return (
        // This div is the container for the landing page *content*
        <div className="landing-page-content"> 
            
            {/* The global 'landing-page' class that sets padding/min-height will be applied in main.jsx */}
            {/* The <div id="top"> is still useful for scrolling */}
            <div id="top"></div> 
            
            <div className="content-wrapper">
                {/* REMOVE: <Header /> */}
                <HeroSection />
                <AboutUsSection />
            </div>
        </div>
    );
};

export default App;