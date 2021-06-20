import React from 'react';
import './style.css';

const NavBar = () => {
    return(

        <div id="nav">
            
            <div className="nav_container">

                <div className="nav_logo">
                    <a href="#home">Jujutsu Kaisen</a>
                </div>

                <ul className="nav_menu">
                    <li className="nav_item"><a href="#home" className="nav_link">Home</a></li>
                    <li className="nav_item"><a href="#sobre" className="nav_link">Sobre</a></li>
                    <li className="nav_item"><a href="#anime" className="nav_link">Anime</a></li>
                    <li className="nav_item"><a href="#manga" className="nav_link">Manga</a></li>
                </ul>

                <div>
                    <a href="https://animesonehd.xyz/41563/" className="nav_button">Assistir</a>
                </div>

                <div className="nav_icon">
                    <i className="fas fa-bars"></i>
                </div>

            </div>

        </div>

    );
}

export default NavBar;