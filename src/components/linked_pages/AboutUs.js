import React from 'react';
import './AboutUs.css'; // Make sure to create this CSS file in the same directory

function AboutUs() {
    return (
        <div className="about-us-container">
            <h1>Welcome to Resourceful</h1>
            <p>
                A project born from a shared vision to empower learning and resource sharing
                like never before. Crafted with passion during a high-energy hackathon, Resourceful
                is the brainchild of Yetayal Tizale, Donell Makuvire, and Anaise Uwonakunze.
            </p>

            <h2>Our Journey</h2>
            <p>
                The journey of Resourceful began when we, a group of ambitious innovators, came
                together at a hackathon. With a ticking clock and an electric atmosphere of creativity,
                we were driven by a common goal...
            </p>

            {/* Repeat sections for Vision, Why Resourceful, and Meet the Team */}

            <div className="team-section">
                <h2>Meet the Team</h2>
                <div className="team-member">
                    <h3>Yetayal Tizale</h3>
                    <p>A visionary with a knack for problem-solving, Yetayal brings a wealth of technical expertise and creative insight to the team.</p>
                </div>
                <div className="team-member">
                    <h3>Donell Makuvire</h3>
                    <p>Donell's passion for technology and education drives his commitment to making Resourceful a catalyst for change in learning.</p>
                </div>
                <div className="team-member">
                    <h3>Anaise Uwonakunze</h3>
                    <p>With a keen eye for design and user experience, Anaise ensures that Resourceful is not only functional but also engaging and intuitive.</p>
                </div>
            </div>

            <h2>Our Promise</h2>
            <p>
                As we continue to grow and evolve, our commitment remains unwavering: to provide a platform that empowers individuals to learn, share, and inspire...
            </p>
        </div>
    );
}

export default AboutUs;
