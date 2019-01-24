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
        Cancel: false
      };
  
  };

  clickHandler (){

  }

  changeActive = event => {
      
    const name = event.target.name;
    //const value = this.state([name]);

    switch(name){

      case "Find":
      break;
      case "Details":
      break;
      case "Cancel":
      break;
      case "Cart":
      break;
      default: 
      break;

    }
  
    this.setState({
        optionActive: name
    });
  
}

    render(){

  const activeClass = "btn btn-primary btn-block";
  const inactiveClass = "btn btn-secondary btn-block";      
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
          Variable width content
        </div>
        <div className="col col-lg-2" id = "ElementList">
         Column 3 of 4
        </div>
        <div className="col" id="cart-column"A>
          
      <div className="card">
        <div className="card-body">
        <h5 className="card-title">Articulos en Carrito</h5>
        <h6 className="card-subtitle mb-2 text-muted">{this.state.elementsOnCart[0]}</h6>
        </div>
     </div>


        </div>
      </div>
      </div>
 </div>
        );
    }

}
