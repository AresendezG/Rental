import React from "react";
import {CustomButton} from "../msc/button.js";

export class ArticleDetail extends React.Component{

  constructor(props){
  super(props);
  this.state = {
      SelectedArticlesDetails : props.SelectedArticleArray
  };


}

  render(){

    //var buttons_class = "btn btn-outline-primary btn-block";

    return(
  <div id="detailArticle" className="row">
    <div id="col-Details" className="col">
      <div className = "row" id="row1-details">
        <div className = "col"><span>Articulo #: </span></div>
       <div className = "col"><span>{this.props.SelectedArticleArray[0]}</span></div>
    </div>
    <div className = "row" id="row2-details">
      <div className = "col"><span>Precio de renta: $</span></div>
      <div className = "col"><span>{this.props.SelectedArticleArray[3]}</span></div>
    </div>
    <div className = "row" id="row1-details">
      <div className = "col"><span>Estilo: </span></div>
      <div className = "col"><span>{this.props.SelectedArticleArray[2]}</span></div>
    </div>
    <div className = "row" id="row1-details">
      <div className = "col"><span>Color: </span></div>
      <div className = "col"><span>{this.props.SelectedArticleArray[1]}</span></div>
   </div>
  </div> {/*Column Ends for display Images*/}
  <div id="col-Image" className="col">
    <div className="row">
      In this Area should be drawn the Image
      {this.props.SelectedArticleArray[4]}
    </div>
    <div className="row">
      <CustomButton nameofClass="btn btn-success btn-block" childText = "Agregar al carrito"/>
    </div>
  </div>
  </div>
    );
  }
}
