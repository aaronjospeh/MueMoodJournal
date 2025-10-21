import React from 'react';
import MueLogo from '../assets/mue.svg'; // Import Mue logo for the button
import './AboutUsSection.css';

const AboutUsSection = () => {
    return (
        <section id="about" className="about-us-section">
            
            {/* The bg-circles-container is now in App.jsx and spans the whole page */}
            {/* So, remove the div with class="bg-circles" here */}

            <div className="about-content">
                <h2 className="about-title">Who Are We</h2>

                <div className="description-box">
                    <p>
                        MUE is a modern solution designed to simplify and enhance the user experience 
                        in managing everyday expenses. Built by the HUMIC engineering team, MUE integrates 
                        smart design and intuitive technology to help users track, analyze, and plan their 
                        finances effortlessly. With a mission to make financial management accessible, 
                        efficient, and visually engaging, MUE aims to support individuals and communities 
                        in developing better financial habits for a more organized life.
                    </p>
                </div>

                <div className="developer-btn-container">
                    <button className="developer-btn">
                        {/* --- KEY CHANGE 5: Mue Logo inside button --- */}
                        <img src={MueLogo} alt="Mue Logo" className="mue-logo-inside-btn" />
                        <span>Our Developer</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;