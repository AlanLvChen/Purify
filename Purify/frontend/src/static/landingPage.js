import React from 'react';
import '../css/landingPage.css';

const landingPage = () => {


    const CLIENT_ID = 'b0c517e6ae45409d87d7b72f21452e7e'
    
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const redirect = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
    

    return (
        <div className="title disable-select">
            <h1 className="landing-header">Purify</h1>
            <p className="landing-p">Simple.  Intuitive.</p>
            <p className="landing-p">Organize your Spotify playlists</p>
            <a className="btn btn-green btn-lg" href={redirect} onClick={() => console.log('Clicked') }>Get Started</a>
        </div>

    );
};

export default landingPage;
