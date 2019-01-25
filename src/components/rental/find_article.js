import React from "react";

export class FindArticle extends React.Component{
    constructor(props){
    super(props);

    this.state = {
      list_items: [],


    };

    
  };
   


  render(){
    var buttons_class = "btn btn-outline-primary btn-block";

    return(
<div id="FindArticle">
  <div id="row1" className="row">
  <div id="col1" className="col">
      <form className="container">
        <div className="row">
            <label htmlFor="articleNumber" className="col">Buscar Por Número de Articulo: </label>
            <input name="articleNumber" placeholder="# de Articulo..." className="col form-control" />
            <div className="col col-lg-3"><div className="searchIcon">Icono Buscar</div></div>
        </div>
        <div className="row">
            <label htmlFor="minPrice" className="col">Precio Mínimo: </label>
            <input type="number" name="minPrice" min="50" max="1000" className="col form-control" />
            <label htmlFor="maxPrice" className="col">Precio Máximo: </label>
            <input type="number" name="maxPrice" min="100" max="1000" className="col form-control" />
        </div>
        <div className="row">
        <div className="col"><label>Color: </label></div><div className="col"><label>Estilo: </label></div></div>
      </form>
  </div>
  <div id="col2" className="col col-lg-3">
  <div className="form-group">
    <label htmlFor="ArticleList">Example Article List (Replaceable by Component)</label>
    <select  className="form-control" id="ArticleList">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  </div>
  </div>

</div>

    );
  }
}
