import React from 'react';
import './Services.css'; // Make sure to create this CSS file in the same directory

function Services() {
    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <p>Discover how Resourceful leverages AI to transform the way you access information.</p>

            <section className="service-detail">
                <h2>Intelligent Prompt Analysis</h2>
                <p>Our platform uses advanced AI to analyze your prompts or uploaded PDFs, identifying key words, topics, and subtopics to tailor your search.</p>
            </section>

            <section className="service-detail">
                <h2>Comprehensive Search</h2>
                <p>By breaking down your request, our system conducts thorough searches across Google Scholar and YouTube, ensuring you receive the most relevant academic papers and educational videos.</p>
            </section>

            <section className="service-detail">
                <h2>Organized Results</h2>
                <p>Results are meticulously organized by topics and subtopics, making it easy to navigate through the wealth of information and find exactly what you need.</p>
            </section>

            <section className="how-to-use">
                <h2>How to Use Resourceful</h2>
                <ol>
                    <li>Navigate to the search page to type in your prompt or choose to upload a PDF for analysis.</li>
                    <li>Hit 'Search' to initiate the AI-driven discovery process.</li>
                    <li>Explore the categorized results, sorted by topics and subtopics for your convenience.</li>
                </ol>
            </section>
        </div>
    );
}

export default Services;
