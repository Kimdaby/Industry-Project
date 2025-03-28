import React from 'react';
import './SingleMoviePage.scss'

function SingleMoviePage() {
    return (
        <div className="tvshow-page">
            <div className="hero-banner">
                <img src="https://picsum.photos/500/220" className="hero-image" />
                <div className="overlay-gradient" />
                <div className="hero-text">
                    <h1>Something Something TV Show</h1>
                </div>
            </div>
            <div className="play-button">
                <button>▶ Watch S1 E1</button>
            </div>
            <div className='extra-buttons'>
                <div className='extra-button'>My List</div>
                <div className='extra-button'>Trailer</div>
                <div className='extra-button'>Share</div>
            </div>
            <div className="description">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore necessitatibus dicta, repellat laborum animi quis ea sequi tempore adipisci doloribus nulla porro quidem perferendis doloremque ducimus itaque vel iusto aliquid?</p>
            </div>
            <div className='genre-text'>
                <p>Crime Drama Thriller</p>
            </div>
            <div className='availability-text'>
                <p>4k UHD, HDR, and Dolby Atmos availability depends on plan and device.</p>
            </div>
            <div className="episodes-section">
                <h2 className='season-text'>Season 1</h2>
                <div className="episode-card">
                    <img src="https://picsum.photos/500/201" alt="Episode 1" />
                    <div>
                        <h3>1. Pilot</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quod quasi.</p>
                    </div>
                </div>
                <div className="episode-card">
                    <img src="https://picsum.photos/500/200" alt="Episode 2" />
                    <div>
                        <h3>2. Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="episode-card">
                    <img src="https://picsum.photos/500/202" alt="Episode 2" />
                    <div>
                        <h3>3. Lorem ipsum dolor sit.</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="episode-card">
                    <img src="https://picsum.photos/500/203" alt="Episode 2" />
                    <div>
                        <h3>4. Lorem, ipsum dolor.</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="episode-card">
                    <img src="https://picsum.photos/500/204" alt="Episode 2" />
                    <div>
                        <h3>5. Lorem ipsum dolor sit.</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="episode-card">
                    <img src="https://picsum.photos/500/205" alt="Episode 2" />
                    <div>
                        <h3>6. Lorem, ipsum dolor.</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleMoviePage;
