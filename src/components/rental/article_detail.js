import React from "react";
import {Link} from "react-router-dom";

export class ArticleDetail extends React.Component{

  constructor(props){
  super(props);
  this.state = {
      SelectedArticlesDetails : props.SelectedArticleArray
  };


}

  render(){

    var buttons_class = "btn btn-outline-primary btn-block";

    return(
  <div id="detailArticle" className="row">
  <div id="col-Details" className="col">
  <div className = "row" id="row1-details">
    <div className = "col"><span>Articulo #: </span></div>
    <div className = "col"><span>{this.state.SelectedArticlesDetails[0]}</span></div>
  </div>
  <div className = "row" id="row2-details">
    <div className = "col"><span>Precio de renta: $</span></div>
    <div className = "col"><span>{this.state.SelectedArticlesDetails[1]}</span></div>
  </div>
  <div className = "row" id="row1-details">
    <div className = "col">
    </div>
    <div className = "col">
    </div>
  </div>
  </div> {/*Column Ends for display Images*/}
  <div id="col-Image" className="col">
      In this Area should be drawn the Image
  </div>
  </div>
    );
  }
}
