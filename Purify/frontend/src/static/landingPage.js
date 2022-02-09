import React from 'react';
import '../css/landingPage.css';

const landingPage = () => {
    return (
        <div className="title disable-select">
            <h1 className="landing-header">Purify</h1>
            <p className="landing-p">Simple.  Intuitive.</p>
            <p className="landing-p">Organize your Spotify playlists</p>
            <button type="button" className="btn btn-green btn-lg" onClick={() => console.log("Success")}>Get Started</button>
            
        </div>
        
    );
};

export default landingPage;
