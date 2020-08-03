import React from 'react';
import './App.css';
import { Row, Col, Button, Input, Jumbotron, FormGroup } from 'reactstrap';
import * as $ from 'jquery'
class App extends React.Component{

  getValue(){
    window.location.href = '/detalhes/' + $('#idPesquisar').val()
  }

  func(){
    document.getElementById('divCat').style.display = 'block'
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#filmesCat").offset().top}, 800);
  }

  render(){
    return (
      <div>
        <Row className="Row">
          <Col md="5" style={{marginLeft: 20}}>
            <h1 className="title">Conheça os detalhes daquele seu filme favorito!</h1>
            <div className="pipoca"></div>
          </Col>
          <Col md="6">
            <div className="Jumbotron">
              <h1 className="h1Title">Digite o nome do filme.</h1>
              <Row>
                  <Col xs='10'>
                    <Input className="Input" id="idPesquisar"/>
                  </Col>
                  <Col xs='2'>
                    <Button className="buttonProcurar" onClick={this.getValue}>Procurar</Button>
                  </Col>
              </Row>
              <hr/>
              <p>Se preferir você pode visualizar o nosso catálogo de filmes.</p>
              <p><Button color="primary" id="btnCat" onClick={this.func} className="primaryButton" href="#filmesCat">Ir para o catálogo</Button></p>
            </div>
          </Col>
        </Row>
        
      </div>
    );
  }

}
export default App;
