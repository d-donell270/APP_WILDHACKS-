import React from 'react';
import './Background.css';
import '../App.css'
import { Button } from './Button';

function Background() {
    return (
        <div className='hero-container'>
            <div className="hero-video">
                <video src="video/312video_background.mp4" autoPlay loop muted />
            </div>
            <h1>AI-Powered Learning</h1>
            <p>Unleash Insights, Ignite Curiosity!!!</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' path="/Search">
                        Search...
                    </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' path="/Upload">
                    Upload PDF <i className="fas fa-file-pdf" />
                    </Button>
                    
            </div>
        </div>
    )
}


export default Background;