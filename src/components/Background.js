import React from 'react';
import './Background.css';
import '../App.css'
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Background() {
    return (
        <div className='hero-container'>
            <video src="/4884234-uhd_3840_2160_30fps.mp4" autoPlay loop muted />
            <h1>AI-Powered Learning</h1>
            <p>Unleash Insights, Ignite Curiosity!!!</p>
            <div className="hero-btns">
                <Link to="/Search">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        Search...
                    </Button>
                </Link>
                <Link to="/Upload">
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        Upload PDF
                    </Button>
                </Link>

            </div>
        </div>
    )
}


export default Background;