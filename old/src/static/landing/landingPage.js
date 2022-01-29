import React from 'react';
import './landingPage.css';

const landingPage = () => {
    return (
        <div className="title disable-select">
            <h1>Purify</h1>
            <p>Simple. Intuitive.</p>
            <p>Organize your Spotify playlists</p>
            <button type="button" className="btn btn-green btn-lg" onClick={() => console.log("Success")}>Get Started</button>
            
        </div>
        
    );
};

export default landingPage;