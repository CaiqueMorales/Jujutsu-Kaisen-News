import React from 'react';
import './style.css';

const Home = () => {
    return(

        <div id="home">

            <div className="home_container">
                <h1 className="home_title">Seja bem-vindo</h1>
                <div className="home_button_container">
                    <a href="https://www.youtube.com/watch?v=ynr6gnyu9NE" className="home_button">
                        Ver Trailer <i className="far fa-play-circle"></i>
                    </a>
                    <a href="https://mangalivre.net/manga/jujutsu-kaisen/7178" className="home_button">
                        Ver Manga <i className="fab fa-readme"></i>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Home;