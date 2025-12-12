// src/App.jsx

import React from 'react';
import HeroSection from "./components/HeroSection.jsx";
import MoodEmotionSection from "./components/MoodEmotionSection.jsx";
import PopularQuotesSection from "./components/PopularQuotesSection.jsx";
import ImportanceOfJournalingSection from "./components/ImportanceOfJournalingSection.jsx";

const App = () => {
    return (
        // This div is the container for the landing page *content*
        <div className="landing-page-content"> 
            
            {/* The global 'landing-page' class that sets padding/min-height will be applied in main.jsx */}
            {/* The <div id="top"> is still useful for scrolling */}
            <div id="top"></div> 
            
            <div className="content-wrapper">
                <HeroSection />
                <MoodEmotionSection />
                <PopularQuotesSection />
                <ImportanceOfJournalingSection />
            </div>
        </div>
    );
};

export default App;