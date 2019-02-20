import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './app/components/Header'
import {Main} from './app/components/Main'
class App extends Component {

  //Constructor 
  constructor(){
    super();
    var auxiliar;
    
    
    this.state={
      cambio: true,
      id: '',
      name: '',
      description: '',
      img: ''
    };
    this.cambio();
  }
  //Funcion que hace un request a al api que regresa un json
  cambio(){
    var auxiliar;
    fetch("https://api.punkapi.com/v2/beers/random").then(data => {
   
    return data.json();
    }).then(data => {
      auxiliar=data[0];
      
      this.setState({
        cambio: !this.state.cambio,
        id: auxiliar.id,
        name: auxiliar.name,
        description: auxiliar.description,
        img: auxiliar.image_url
      });
    });
   
   
  }
  //Renderizar el objeto
  render() {
   
    return (
       <div >
       <Header camb={this.cambio.bind(this)} />
       <Main cambio={this.state}/>
      </div>
    );
  }
}

export default App;
