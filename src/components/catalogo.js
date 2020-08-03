import React from 'react';
import './catalogo.css';
import N_A from './n-a.jpg'
import { Row, Col, Button, Input, FormGroup } from 'reactstrap';

class Catalogo extends React.Component{

    state={
        Title: [],
        Plot: [],
        Poster: [],
        mdbRating: [],
        Runtime: [],
        mdbId: []
    }
    
  componentDidMount() {
      var random = Math.floor(Math.random() * 1500000) + 1000000
    const apiUrl = "http://www.omdbapi.com/?apikey=2729c5a&i=tt"+ random
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
          this.setState({Title: data.Title})
          this.setState({Plot: data.Plot})
          if(data.Poster == "N/A" || data.Poster == undefined || data.Response == 'False'){
            this.setState({Poster: N_A})
          }else{
            this.setState({Poster: data.Poster})
          }
          this.setState({mdbId: '/detalhes/' + data.imdbID})
          this.setState({mdbRating: data.mdbRating})
          this.setState({Runtime: data.Runtime})
      });
  }

  render() {
     return (
        <div>
            <Col md='2'>
                <a className="bgfime" href={`${this.state.mdbId}`}>
                    <Col md='12'>
                        <img className="posterCat" src={(this.state.Poster)} alt="poster"/>
                    </Col>
                    <div className="poster-text">
                        <h3>{this.state.Title}</h3>
                        <p>{this.state.Plot}</p>
                        <FormGroup>
                            <small id="notaFilme">Nota: {this.state.mdbRating}</small>
                            <small id="tempoFilme">{this.state.Runtime}</small>
                        </FormGroup>
                    </div>
                </a>
            </Col>     
        </div>  
     )
  }
  
}

  
export default Catalogo;
  
