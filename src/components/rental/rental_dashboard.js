import React from "react";

import {RentalHome} from "./rental_home";
import {ArticleDetail} from "./article_detail";
import {FindArticle} from "./find_article";
import {FinishTicket} from "./finish_ticket";
import {Listofitems} from "../msc/list.js"

export class RentalDashboard extends React.Component {

  constructor(props){
    super(props);
    this.buttonFind = React.createRef();
    this.buttonDetails = React.createRef();
    this.state = {
        optionActive: "Buscar",
        elementsOnCart: [],
        elementsFound: ["element1", "element2", "element3"],
        formArea : "Cick en boton Buscar para buscar un artículo",
        listArea : null
      };

      this.getElementstoShow = this.getElementstoShow.bind(this);

  };

  componentDidMount(){
    this.buttonFind.current.click();
  }


  changeActive = event => {

    const name = event.target.name;
    var itemToDraw, drawListArea;
    //const value = this.state([name]);
    switch(name){
      case "Find":
        itemToDraw = <FindArticle findFunction={this.getElementstoShow} />;
        drawListArea = <Listofitems itemstoshow={this.state.elementsFound}/>;
      break;
      case "Details":
        itemToDraw = <ArticleDetail SelectedArticleArray = {this.state.elementsFound} />;
        drawListArea = <Listofitems itemstoshow={this.state.elementsFound}/>;
      break;
      case "Cancel":
      break;
      case "Cart":
      break;
      default:
      break;

    }

    this.setState({
        optionActive: name,
        formArea: itemToDraw,
        listArea: drawListArea
    });

}



getElementstoShow(event){

    var num;
    var foundMatches = [];

    for (var i=0; i<5; i++){
      num = Math.floor((Math.random() * 9999) + 1000);
      foundMatches[i] = num.toString();

    }
    var itemToDraw = <Listofitems itemstoshow={foundMatches} idname="MatchesFound" /> ;
   console.log(foundMatches);

    this.setState({
      elementsFound: foundMatches,
      listArea: itemToDraw

    });

    console.log(this.state.elementsFound);
    /*La idea es que aquí, cuando ya tengamos listo el evento, se "haga click" en los detalles...*/
    if (event != null)
      event.preventDefault();

    this.buttonDetails.current.click();

}

    render(){

  const activeClass = "btn btn-primary";
  const inactiveClass = "btn btn-outline-dark";
        return(

 <div id = "master_dashboard">

 <nav className="nav nav-tabs justify-content-end">
     <button className={this.state.optionActive === "Find"? activeClass : inactiveClass} name="Find" ref={this.buttonFind} onClick = {this.changeActive} >Buscar </button>
     <button className={this.state.optionActive === "Details"? activeClass : inactiveClass} name="Details" ref={this.buttonDetails} onClick = {this.changeActive}>Detalles </button>
     <button className="btn btn-outline-danger" name="Cancel" onClick = {this.changeActive}>Cancelar Ticket</button>
     <button className={this.state.optionActive === "Cart"? activeClass : inactiveClass} name="Cart" onClick = {this.changeActive}>Articulos en Carrito: {this.state.elementsOnCart.length}</button>
</nav>

    <div id="skeleton_grid">
      <div className="row" id="1stRow">
        <div id = "formArea" className = "col"> {this.state.formArea} </div>
        <div id = "listArea" className = "col col-lg-3"> {this.state.listArea} </div>
      </div>
      </div>
 </div>
        );
    }

}
