import React from "react";

import {RentalHome} from "./rental_home";
import {ArticleDetail} from "./article_detail";
import {FindArticle} from "./find_article";
import {FinishTicket} from "./finish_ticket";
import {Listofitems} from "../msc/list.js"

export class RentalDashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        optionActive: "Buscar",
        elementsOnCart: [],
        elementsFound: [],
        Find: false,
        Details: false,
        Cart: false,
        Cancel: false,
        drawItem : <FindArticle />
      };

  };

  clickHandler (){

  }

  changeActive = event => {

    const name = event.target.name;
    var itemToDraw;
    //const value = this.state([name]);

    switch(name){

      case "Find":
        itemToDraw = <FindArticle elementsFound={this.state.elementsFound} />;
      break;
      case "Details":
        itemToDraw = <ArticleDetail />;
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
        drawItem: itemToDraw
    });

}

    render(){

  const activeClass = "btn btn-primary";
  const inactiveClass = "btn btn-outline-dark";
        return(

 <div id = "master_dashboard">

 <nav className="nav nav-tabs justify-content-end">
     <button className={this.state.optionActive === "Find"? activeClass : inactiveClass} name="Find" onClick = {this.changeActive} >Buscar </button>
     <button className={this.state.optionActive === "Details"? activeClass : inactiveClass} name="Details" onClick = {this.changeActive}>Detalles </button>
     <button className={this.state.optionActive === "Cancel"? activeClass : inactiveClass} name="Cancel" onClick = {this.changeActive}>Cancelar</button>
     <button className={this.state.optionActive === "Cart"? activeClass : inactiveClass} name="Cart" onClick = {this.changeActive}>Articulos en Carrito: {this.state.elementsOnCart.length}</button>
</nav>

    <div id="skeleton_grid">
      <div className="row" id="1stRow">
        <div id = "sub-dashboard" className = "col"> {this.state.drawItem}  </div>
        <Listofitems itemstoshow={this.state.elementsFound} />
      </div>
      </div>
 </div>
        );
    }

}
