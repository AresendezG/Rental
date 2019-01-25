import React from "react";

import {RentalHome} from "./rental_home";
import {ArticleDetail} from "./article_detail";
import {FindArticle} from "./find_article";
import {FinishTicket} from "./finish_ticket";

export class RentalDashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        optionActive: "Buscar",
        elementsOnCart: [""], 
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
        itemToDraw = <FindArticle />;
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

  const activeClass = "btn btn-primary btn-block";
  const inactiveClass = "btn btn-outline-dark btn-block";      
        return(

 <div ref = "master_dashboard">
    <div id="skeleton_grid">
      <div className="row">
        <div className="col col-lg-2">
           <div className= "row">
              <div className = "col">
               <button className={this.state.optionActive == "Find"? activeClass : inactiveClass} name="Find" onClick = {this.changeActive} >Buscar </button>
               <button className={this.state.optionActive == "Details"? activeClass : inactiveClass} name="Details" onClick = {this.changeActive}>Detalles </button>
               <button className={this.state.optionActive == "Cart"? activeClass : inactiveClass} name="Cart" onClick = {this.changeActive}>Carrito</button>
               <button className={this.state.optionActive == "Cancel"? activeClass : inactiveClass} name="Cancel" onClick = {this.changeActive}>Cancelar</button>
              </div>
           </div>  
        </div>
        <div className="col-md-auto" id = "sub-dashboard">
          {this.state.drawItem}
        </div>
        <div className="col" id = "ElementList">
         Column 3 of 4
        </div>
        <div className="col" id="cart-column">
      <div className="row">   
        <div className="card">
        <div className="card-body">
        <h5 className="card-title">Articulos en Carrito</h5>
        <h6 className="card-subtitle mb-2 text-muted">{this.state.elementsOnCart[0]}</h6>
        </div>
        </div>
     </div>
        <div className="row">
         <button className="btn btn-outline-dark">Agregar al carrito</button> 
        </div> 

        </div>
      </div>
      </div>
 </div>
        );
    }

}
