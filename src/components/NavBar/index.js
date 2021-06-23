import React, { useEffect, useState } from 'react';
import './style.css';

const NavBar = () => {

    const [click, setClick] = useState(false)

    const clicar = () => setClick(!click);

    const fechar = () => setClick(false)

    const [fundo, setFundo] = useState(true)

    useEffect(() => {

        const scrollListener = () => {

            if(window.scrollY > 10){
                setFundo(false)
            } else {
                setFundo(true)
            }

        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }

    })

    return(

        <div className={fundo ? "nav active" : "nav"}>
            
            <div className="nav_logo" onClick={fechar}>
                <a href="#home">Jujutsu Kaisen</a>
            </div>

            <ul className={click ? "nav_menu active" : "nav_menu"}>
                <li className="nav_item"><a onClick={clicar} href="#home" className="nav_link">Home</a></li>
                <li className="nav_item"><a onClick={clicar}href="#noticias" className="nav_link">Noticias</a></li>
                <li className="nav_item"><a onClick={clicar} href="#anime" className="nav_link">Anime</a></li>
                <li className="nav_item"><a onClick={clicar} href="#manga" className="nav_link">Manga</a></li>
            </ul>

            <div className={click ? "button_container active" : "button_container"}>
                <a onClick={clicar} href="https://animesonehd.xyz/41563/" className="nav_button">Assistir</a>
            </div>

            <div className={click? "nav_icon active" : "nav_icon"}>
                <i onClick={clicar} className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

        </div>

    );
}

export default NavBar;