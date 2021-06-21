import React from 'react';
import Sukuna from '../../assets/sukuna.png'
import './style.css';

const Noticias = () => {
    return(

        <div id="noticias">
            <div className="noticias_titulo">
                <h2>Veja as ultimas noticias sobre o assunto</h2>
            </div>
            <div className="card_container">
                <a href="https://www.youtube.com/watch?v=c3SsqiM5hDM" className="card">
                    <figure>
                    <img src={Sukuna} alt="Sukuna" />
                    <figcaption>Ultimo episódeo de Jujutsu Kaisen gera grande felicidade pelos fãs do Anime.</figcaption>
                    </figure>
                </a>
                <a href="https://ovicio.com.br/jujutsu-kaisen-entra-em-hiato-criador-tranquiliza-fas-em-mensagem/" className="card">
                    <figure>
                    <img src={Sukuna} alt="Sukuna" />
                    <figcaption>Manga de Jujutsu Kaisen será interrompido devido a problemas de saúde do escritor.</figcaption>
                    </figure>
                </a>
                <a href="https://screenrant.com/jujutsu-kaisen-season-1-best-episodes-imdb/" className="card">
                    <figure>
                    <img src={Sukuna} alt="Sukuna" />
                    <figcaption>Veja quais são os 10 episódeos mais bem avaliados segundo pesquisa do IMBD.
                    </figcaption>
                    </figure>
                </a>
                <a href="https://www.instagram.com/p/COoC23aDG0G/" className="card">
                    <figure>
                    <img src={Sukuna} alt="Sukuna" />
                    <figcaption>Fã faz cosplay perfeita de Nobara Kugisake, co-protagonista do anime Jujutsu Kaisen.</figcaption>
                    </figure>
                </a>
            </div>
        </div>

    );
}

export default Noticias;