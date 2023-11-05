import React, { useEffect, useState } from 'react';
import '../styles/buscador.css'; 
const CLIENT_ID = "453d6c17658a4a4a8498f17cb1b22b75";
const CLIENT_SECRET = "6d243006672b46cea52da45f4fa7b0f7";
const sinFotoImage = require('../images/sinimagen.png');

function Buscador() {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    }, []);

    async function search() {
        console.log('search for: ' + searchInput);
        var searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }

        var artistsData = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
            .then(response => response.json())
            .then(data => data.artists.items);

        var songsData = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track', searchParameters)
            .then(response => response.json())
            .then(data => data.tracks.items);

        var playlistsData = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=playlist', searchParameters)
            .then(response => response.json())
            .then(data => data.playlists.items);

        var combinedResults = [...artistsData, ...songsData, ...playlistsData];

        combinedResults.sort((a, b) => {
            const popularityA = a.popularity || 0;
            const popularityB = b.popularity || 0;
            return popularityB - popularityA;
        });

        setResults(combinedResults);
    }

    return (
        <div className="main-container">
            <div className="search-container">
                <input
                    type="input"
                    className="search-input"
                    placeholder='Search for artists, songs, or playlists'
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            search();
                        }
                    }}
                    onChange={event => setSearchInput(event.target.value)}
                />
                <button className="search-button" onClick={search}>
                    Search
                </button>
            </div>

            <div className="results-container">
                {results.map((result, i) => {
                    const imageUrl = result.images?.[0]?.url || result.album?.images?.[0]?.url || sinFotoImage;
                    return (
                        <div className="result-card" key={i}>
                            <img
                                className="result-image"
                                src={imageUrl}
                                alt={result.name}
                            />
                            <p className="result-title">{result.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Buscador;
