import React from 'react';
import './style.css'

const Rodape = () => {

    return(

        <div className="Rodape">
            <div className="rodape_container">
                <div className="rodape_semicontainer">
                    <h4 className="rodape_titulo">Extras</h4>
                    <p className="rodape_item">Trailer 1</p>
                    <p className="rodape_item">Trailer 2</p>
                    <p className="rodape_item">Trailer 3</p>
                </div>
                    <div className="rodape_semicontainer">
                        <h4 className="rodape_titulo">Contate-nos</h4>
                        <p className="rodape_item">aecaique@gmail.com</p>
                        <p className="rodape_item">(11) 96193-0889</p>
                        <p className="rodape_item">(11) 96193-0889</p>
                    </div>
                <div className="rodape_semicontainer">
                    <h4 className="rodape_titulo">Redes Sociais</h4>
                    <p className="rodape_item">Instagram</p>
                    <p className="rodape_item">Facebook</p>
                    <p className="rodape_item">Twitter</p>
                </div>
            </div>
        </div>

    );
}

export default Rodape