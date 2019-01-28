import React from "react";
import {PriceInput} from "../msc/PriceInput.js";
import {List, Listofitems} from "../msc/list";


export class FindArticle extends React.Component{
    constructor(props){
    super(props);

    this.state = {
      styles: ["noche", "corto", "abierto", "escote", "juvenil"],
      colors: ["rojo", "verde", "azul", "dorado", "plata", "negro", "morado"]
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
      <br></br>
      <form className="container" onSubmit={this.props.findFunction}>
        <div className="row">
            <label htmlFor="articleNumber" className="col">Buscar Por Número de Articulo: </label>
            <input name="articleNumber" placeholder="# de Articulo..." className="col form-control" />
        </div>
        <br />
        <div className="row">
           <div id="col1R2" className="col"><PriceInput label={"Precio Minimo"} /> </div>
           <div id="col2R2" className="col"><PriceInput label={"Precio Maximo"} /> </div>
        </div>
        <br />
        <div className="row">
        <div className="col"><Listofitems itemstoshow={this.state.colors} nameofClass="col" labelstr="Color: "/></div>
        <div className="col"><Listofitems itemstoshow={this.state.styles} nameofClass="col" labelstr="Estilo: "/></div>
        </div>
        <br />
        <div className="row">
        <div className="col"><button className = "btn btn-success" onClick={this.props.findFunction}>Buscar... </button></div>
        <div className="col"><button className = "btn btn-danger" type="reset">Limpiar Búsqueda </button></div>
        </div>
        <br />
      </form>
  </div>
  </div>
  </div>
    );
  }
}
