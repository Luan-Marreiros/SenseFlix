import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route,} from "react-router-dom"

import App from './App';
import Home from './components/home.js';
import Detalhes from './components/detalhes.js';
import Catalogo from './components/catalogo.js';
import { Col, Row } from 'reactstrap';
import * as $ from 'jquery'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/detalhes/:idFilme">
        <Home/>
        <Detalhes/>
      </Route>
      <Route path="/">
            <Col md='12'>
              <Home/>
              <App/>
            </Col>
          <div id="divCat" style={{display: 'none'}}>
            <h1 className="titleCat" id="filmesCat">Catálogo de filmes</h1>
            <Col md='12'>
              <Row >
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
              </Row>
            </Col>
          </div>
      </Route>
    </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

