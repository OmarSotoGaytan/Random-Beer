import React from 'react';

export class Main extends React.Component{
    render(){
      
        return (
            <div className="container cerveza">

                <div className="row titulo">
                    <p>{this.props.cambio.name}</p>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                    <img  className="img img-fluid" src={this.props.cambio.img} />
                    </div>
                    <div className="col-sm-6 texto text-center">
                        <p>{this.props.cambio.description}</p>
                    </div>
                </div>



            </div>
            
            ); 
    }
}