import React from 'react';
import MueLogo from '../assets/mue.svg'; // Import Mue logo for the button
import './AboutPage.css';

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
                        <span>Our Developer</span>
                    </button>
                </div>
                {/* Vision & Mission Section */}
                <div className="vision-mission">
                    <h2 className="vm-title">Vision & Mission</h2>
                    <div className="vm-grid">
                        <div className="vm-card">
                            <h3 className="vm-card-title">Vision</h3>
                            <p className="vm-card-text">
                                To be the most reliable and easy-to-use platform for managing each user's daily
                                feelings and moods, helping users to understand their feelings and their need for
                                emotional space through simplicity, clarity, and innovation.
                            </p>
                        </div>
                        <div className="vm-card">
                            <h3 className="vm-card-title">Mission</h3>
                            <p className="vm-card-text">
                                To simplify mood management by combining intuitive design, data-driven insights,
                                and ease of use, MUE aims to help users better understand, explore, and navigate
                                their inner feelings, creating individuals who understand themselves well and build a
                                positive atmosphere for their own and others' well-being.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;