import React from "react";
import {PriceInput} from "../msc/PriceInput.js";


export class FindArticle extends React.Component{
    constructor(props){
    super(props);

    this.state = {
      renderListObj: null
    };
    //this.clickHandler = this.clickHandler.bind(this);

  }


resetHandler(){

}

  render(){
    var buttons_class = "btn btn-outline-primary btn-block";

    return(
<div id="FindArticle" className = "paddingContainer">
  <div id="row1" className="row">
  <div id="col1" className="col">
      <form className="container" onSubmit={this.props.findFunction}>
        <div className="row">
            <label htmlFor="articleNumber" className="col">Buscar Por Número de Articulo: </label>
            <input name="articleNumber" placeholder="# de Articulo..." className="col form-control" />
        </div>
        <div className="row">
            <PriceInput label={"Precio Minimo"} />
            <PriceInput label={"Precio Maximo"} />
        </div>
        <div className="row">
        <div className="col"><label>Color: </label></div><div className="col"><label>Estilo: </label></div>
        </div>
        <div className="row">
        <div className="col"><button className = "btn btn-success" onClick={this.props.findFunction}>Buscar... </button></div>
        <div className="col"><button className = "btn btn-danger" type="reset">Limpiar Búsqueda </button></div>
        </div>
      </form>
  </div>
  </div>
  </div>
    );
  }
}
