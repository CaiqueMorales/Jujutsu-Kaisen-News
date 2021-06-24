import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PaginaInicial from './components/Page/PaginaInicial';
import PaginaSecundaria from './components/Page/PaginaSecundaria';
import PaginaTerciaria from './components/Page/PaginaTerciaria';
import PaginaQuarta from './components/Page/PaginaQuarta';
import NavBar from './components/NavBar';
import Rodape from './components/Rodape';
import './App.css'

const App = () => {
    return(

        <>

        <Router>

            <NavBar />
            <Switch>
                <Route exact path="/" component={PaginaInicial}></Route>
                <Route path="/novidades" component={PaginaSecundaria}></Route>
                <Route path="/anime" component={PaginaTerciaria}></Route>
                <Route path="/manga" component={PaginaQuarta}></Route>
            </Switch>
            <Rodape />

        </Router>

        </>        

    );

}

export default App;