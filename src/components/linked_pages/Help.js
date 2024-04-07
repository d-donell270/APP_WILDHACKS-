import React from 'react';
import './Help.css'; // Ensure this CSS file is created in your project

function Help() {
    return (
        <div className="help-container">
            <h1>Help & FAQs</h1>
            <div className="faq-section">
                <h2>Getting Started</h2>
                <p><strong>Q: How do I use Resourceful?</strong></p>
                <p>A: Simply navigate to our resource section and start exploring. No sign-up is required, and access is completely free.</p>

                <p><strong>Q: Is there a limit to how many resources I can access?</strong></p>
                <p>A: No, you can explore and utilize as many resources as you need. Our mission is to make learning accessible to everyone.</p>

                <h2>Resources</h2>
                <p><strong>Q: Can I contribute resources to Resourceful?</strong></p>
                <p>A: While our current platform is view-only, we are exploring ways for users to contribute. Stay tuned for updates.</p>

                <p><strong>Q: How do you ensure the quality of the resources?</strong></p>
                <p>A: To ensure the quality of resources, we carefully select content from reputable sources. For scholarly articles, we use Google Scholar, prioritizing highly cited and most recent papers from recognized journals. For videos, we choose content from established educational channels on YouTube.</p>
                
                {/* Add more sections and questions as needed */}
            </div>
        </div>
    );
}

export default Help;
