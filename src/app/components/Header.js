import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './Main'
export  class Header extends React.Component{
    constructor(){
        super();
        var hola;
        this.state={
            cambio: "true"
        };
    }
    refrescar(){
        this.props.camb();
     
    }
    render(){
      
        return (
        <div className="header-container container-fluid">     
        <div className="row">
        <header className="header col-auto mr-auto" id="hola">Random Beer</header>
        <button type="button"  onClick={this.refrescar.bind(this)} className=" header-button btn btn-primary btn-sm col-auto">Refresh</button>
        </div>
      
        </div>
        );
    }
}

