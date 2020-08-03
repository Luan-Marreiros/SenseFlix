import React from 'react';
import './detalhes.css'
import { Row, Col, Button, Input, FormGroup, Jumbotron } from 'reactstrap';
import { useLocation } from 'react-router';
import N_A from './n-a.jpg'

class Detalhes extends React.Component{

    state={
         Title:[],
         Plot: [],
         imdbRating: [],
         Runtime: [],
         Poster: [],
         imdbID: [],
         Diretor: [],
         Writer: [],
         Awards: [],
         Production: [],
         Year: [],
         Language: [],
         Actors: [],
         Genre: [],
         Star: []    
    }

    url=new URLSearchParams(window.location.href).toString();
    
  componentDidMount() {
      var urlVariable;
      if(this.url.split('%')[6].substr(2).replace('=',"").includes('tt') == false){
        urlVariable = "http://www.omdbapi.com/?apikey=2729c5a&t="+ this.url.split('%')[6].substr(2).replace('=',"")
      }else{
        urlVariable = "http://www.omdbapi.com/?apikey=2729c5a&i="+ this.url.split('%')[6].substr(2).replace('=',"")
      }
    fetch(urlVariable)
    .then((response) => response.json())
    .then((data) => {

    //Data validation

    if(data.Response == 'False' || data.Title == undefined || data.Title == 'N/A')
    {this.setState({Title: 'Indefinido'})}else{this.setState({Title: data.Title})}
    
    if(data.Response == 'False' || data.Plot == undefined || data.Plot == 'N/A')
    {this.setState({Plot: 'Indefinido'})}else{this.setState({Plot: data.Plot})}
    
    if(data.Response == 'False' || data.imdbRating == undefined || data.imdbRating == 'N/A')
    {this.setState({imdbRating: 'Indefinido'})}else{this.setState({imdbRating: data.imdbRating})}
    
    if(data.Response == 'False' || data.Runtime == undefined || data.Runtime == 'N/A')
    {this.setState({Runtime: 'Indefinido'})}else{this.setState({Runtime: data.Runtime})}
    
    if(data.Response == 'False' || data.Poster == undefined || data.Poster == 'N/A')
    {this.setState({Poster: N_A})}else{this.setState({Poster: data.Poster})}
    
    if(data.Response == 'False' || data.Diretor == undefined || data.Director == 'N/A')
    {this.setState({Diretor: 'Indefinido'})}else{this.setState({Diretor: data.Director})}
    
    if(data.Response == 'False' || data.Writer == undefined || data.Writer == 'N/A')
    {this.setState({Writer: 'Indefinido'})}else{this.setState({Writer: data.Writer})}
    
    if(data.Response == 'False' || data.Awards == undefined || data.Awards == 'N/A')
    {this.setState({Awards: 'Indefinido'})}else{this.setState({Awards: data.Awards})}
    
    if(data.Response == 'False' || data.Production == undefined || data.Production == 'N/A')
    {this.setState({Production: 'Indefinido'})}else{this.setState({Production: data.Production})}
    
    if(data.Response == 'False' || data.Year == undefined || data.Year == 'N/A')
    {this.setState({Year: 'Indefinido'})}else{this.setState({Year: data.Year})}
    
    if(data.Response == 'False' || data.Language == undefined || data.Language == 'N/A')
    {this.setState({Language: 'Indefinido'})}else{this.setState({Language: data.Language})}
    
    if(data.Response == 'False' || data.Actors == undefined || data.Actors == 'N/A')
    {this.setState({Actors: 'Indefinido'})}else{this.setState({Actors: data.Actors})}
    
    if(data.Response == 'False' || data.Genre == undefined || data.Genre == 'N/A')
    {this.setState({Genre: 'Indefinido'})}else{this.setState({Genre: data.Genre})}

    //Rating Stars

    if(this.state.imdbRating < 0 || this.state.imdbRating > 11){
        this.setState({Star: ['fa fa-star-o','fa fa-star-o','fa fa-star-o','fa fa-star-o','fa fa-star-o','fa fa-star-o']})
    }

    if(this.state.imdbRating > 0 && this.state.imdbRating <= 2){
        this.setState({Star: ['fa fa-star','fa fa-star-o','fa fa-star-o','fa fa-star-o','fa fa-star-o']})
    }

    if(this.state.imdbRating > 2 && this.state.imdbRating <= 4){
        this.setState({Star: ['fa fa-star','fa fa-star','fa fa-star-o','fa fa-star-o','fa fa-star-o']})
    }

    if(this.state.imdbRating > 4 && this.state.imdbRating <= 6){
        this.setState({Star: ['fa fa-star','fa fa-star','fa fa-star','fa fa-star-o','fa fa-star-o']})
    }

    if(this.state.imdbRating > 6 && this.state.imdbRating <= 10){
        this.setState({Star: ['fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star']})
    }
    
    });
  }

  render() {
     return (
        <div>
            <Row>
                <Col md="12">
                    <Jumbotron className="jumbotron">
                        <Row>
                            <Col md="9">
                                <h1 style={{fontWeight: 200,fontSize: 50}}>{this.state.Title}</h1>
                                <p className="lead">{this.state.Plot}</p>
                                <hr style={{width: 600}}/>
                                <Row>
                                    <Col md="12">
                                        <h2 style={{fontWeight: 500, marginBottom: 30}}>Mais informações</h2>
                                    </Col>
                                    <Col md='3'>
                                        <Row>
                                            <Col md="3">
                                                <h5>Genêro: <span style={{fontWeight: 300}}>{this.state.Genre}</span></h5>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col  md="3">
                                                <h5>Linguagem: <span style={{fontWeight: 300}}>{this.state.Language}</span></h5>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="3">
                                                <h5>Tempo: <span style={{fontWeight: 300}}>{this.state.Runtime}</span></h5>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="3">
                                                <h5>Ano: <span style={{fontWeight: 300}}>{this.state.Year}</span></h5>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="3">
                                                <h5>Produtora: <span style={{fontWeight: 300}}>{this.state.Production}</span></h5>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4">
                                                <h5>Nota:</h5>                                                
                                            </Col>
                                            <Col md='8'>
                                                <div className="rating">
                                                    <span style={{fontSize: 20}} className = {this.state.Star[0]}></span>
                                                    <span style={{fontSize: 20}} className = {this.state.Star[1]}></span>
                                                    <span style={{fontSize: 20}} className = {this.state.Star[2]}></span>
                                                    <span style={{fontSize: 20}} className = {this.state.Star[3]}></span>
                                                    <span style={{fontSize: 20}} className = {this.state.Star[4]}></span>
                                                </div>
                                            </Col>
                                        </Row>                                        
                                    </Col>
                                    <Col md="2">
                                        <h4 style={{textAlign: "center"}}>Diretores: <span style={{fontWeight: 300}}>{this.state.Diretor}</span></h4>
                                    </Col>
                                    <Col md="2">
                                        <h4 style={{textAlign: "center"}}>Escritores: <span style={{fontWeight: 300}}>{this.state.Writer}</span></h4>
                                    </Col>
                                    <Col md="2">
                                        <h4 style={{textAlign: "center"}}>Atores: <span style={{fontWeight: 300}}>{this.state.Actors}</span></h4>
                                    </Col>
                                    <Col md="2">
                                        <h4 style={{textAlign: "center"}}>Prêmios: <span style={{fontWeight: 300}}>{this.state.Awards}</span></h4>
                                    </Col>
                                </Row>                                
                            </Col>
                            <Col>
                                <img className="poster" src={this.state.Poster}/>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Col>
            </Row>
        </div>
     )
  }
  
}

  
export default Detalhes;
  
