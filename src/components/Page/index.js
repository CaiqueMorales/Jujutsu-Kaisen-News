import React from 'react';
import NavBar from '../NavBar';
import Home from '../Home';
import Noticias from '../Noticias';
import Rodape from '../Rodape';

const Page = () => {
    return(

        <div>

            <NavBar />
            <Home />
            <Noticias />
            <Rodape />

        </div>
    );
}

export default Page;