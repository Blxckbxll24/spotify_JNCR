import React, { useEffect, useState } from 'react';
import '../styles/buscador.css';

const CLIENT_ID = "453d6c17658a4a4a8498f17cb1b22b75";
const CLIENT_SECRET = "6d243006672b46cea52da45f4fa7b0f7";
const sinFotoImage = require('../images/sinimagen.png');

function Buscador() {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [results, setResults] = useState({});
    const [genres, setGenres] = useState([]);
    const [showGenres, setShowGenres] = useState(true);

    useEffect(() => {
        getGenres();
    }, []);

    const getGenres = () => {
        if (!accessToken) {
            return;
        }

        var genreParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };

        fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', genreParameters)
            .then(response => response.json())
            .then(data => setGenres(data.genres));
    }

    useEffect(() => {
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        };
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token));
    }, []);

    useEffect(() => {
        search();
    }, [searchInput, accessToken]);

    async function search() {
        if (!accessToken || searchInput.trim() === "") {
            setResults({});
            setShowGenres(true);
            return;
        }

        setShowGenres(false);

        // Resto del código de búsqueda
        var searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };

        var artistsData = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
            .then(response => response.json())
            .then(data => data.artists.items);

        var songsData = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track', searchParameters)
            .then(response => response.json())
            .then(data => data.tracks.items);

        var albumsData = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=album', searchParameters)
            .then(response => response.json())
            .then(data => data.albums.items);

        var playlistsData = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=playlist', searchParameters)
            .then(response => response.json())
            .then(data => data.playlists.items);

        setResults({ artists: artistsData, songs: songsData, albums: albumsData, playlists: playlistsData });
    }

    return (
        <div className="main-container">
            <div className="search-container">
                <input
                    type="input"
                    className="search-input"
                    placeholder='Search for artists, songs, albums, or playlists'
                    value={searchInput}
                    onChange={event => setSearchInput(event.target.value)}
                />
            </div>
            <div className="results-container">
                {showGenres && genres.map((genre, index) => (
                    <div className="result-card" key={index}>
                        <p className="result-title">{genre}</p>
                    </div>
                ))}
            </div>

            <div className="results-container">
                <div className="result-row">
                    <h2>Artists</h2>
                    {results.artists && results.artists.map((result, i) => (
                        <div className="result-card" key={i}>
                            <img
                                className="result-image"
                                src={result.images?.[0]?.url || sinFotoImage}
                                alt={result.name}
                            />
                            <p className="result-title">{result.name}</p>
                        </div>
                    ))}
                </div>

                <div className="result-row">
                    <h2>Songs</h2>
                    {results.songs && results.songs.map((result, i) => (
                        <div className="result-card" key={i}>
                            <img
                                className="result-image"
                                src={result.album?.images?.[0]?.url || sinFotoImage}
                                alt={result.name}
                            />
                            <p className="result-title">{result.name}</p>
                        </div>
                    ))}
                </div>

                <div className="result-row">
                    <h2>Albums</h2>
                    {results.albums && results.albums.map((result, i) => (
                        <div className="result-card" key={i}>
                            <img
                                className="result-image"
                                src={result.images?.[0]?.url || sinFotoImage}
                                alt={result.name}
                            />
                            <p className="result-title">{result.name}</p>
                        </div>
                    ))}
                </div>

                <div className="result-row">
                    <h2>Playlists</h2>
                    {results.playlists && results.playlists.map((result, i) => (
                        <div className="result-card" key={i}>
                            <img
                                className="result-image"
                                src={result.images?.[0]?.url || sinFotoImage}
                                alt={result.name}
                            />
                            <p className="result-title">{result.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Buscador;
