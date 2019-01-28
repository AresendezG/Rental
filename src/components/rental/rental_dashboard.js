import React from "react";

import {RentalHome} from "./rental_home";
import {ArticleDetail} from "./article_detail";
import {FindArticle} from "./find_article";
import {FinishTicket} from "./finish_ticket";
import {Listofitems} from "../msc/list.js"
import { CustomButton } from "../msc/button.js";

export class RentalDashboard extends React.Component {

  constructor(props){
    super(props);
    this.buttonFind = React.createRef();
    this.buttonDetails = React.createRef();
    this.selectFoundItems = React.createRef();
    this.state = {
        optionActive: "Buscar",
        elementsOnCart: [],
        elementsFound: [
            ["element1", "color 1","style 1","Price 1","Picture 1"], 
            ["element2", "Color 2","Style 2","Price 2","Picture 2"],
            ["element3", "Color 3","style 3","Price 3","Picture 3"],
            ],
        pickedElement: "void",
        formArea : "Cick en boton Buscar para buscar un artículo",
        listArea : null,
        buttonArea: null
      };

      this.getElementstoShow = this.getElementstoShow.bind(this);
      this.setPickedElement = this.setPickedElement.bind(this);
      this.showDetails = this.showDetails.bind(this);

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
        //drawListArea = <Listofitems itemstoshow={this.state.elementsFound}/>;
      break;
      case "Details":
        console.log("Array que se pasó: ");
        console.log(this.state.elementsFound);
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
        formArea: itemToDraw
       // listArea: drawListArea
    });

}



getElementstoShow(event){
    var num;
    var foundMatches = []; 

    //crea un array falso de 5 elementos con 5 Características cada uno.
    for (var i=0; i<5; i++){
      
      num = Math.floor((Math.random() * 9999) + 1000);
      option = 
      foundMatches[i,0] = num.toString();
      foundMatches[i,1] = "Color Example:"+i.toString();
      foundMatches[i,2] = "Style Ex:" +i.toString();
      foundMatches[i,3] = "Price: $"+num.toString();
      foundMatches[i,4] = "Picture:"+i.toString();
      
    }
    var itemToDraw = <Listofitems itemstoshow={foundMatches[1]} idname="MatchesFound" nameofClass="listContainer" labelstr="Articulos Encontrados:" focusFunction={this.setPickedElement}/> ;
    console.log(foundMatches);
    this.setState({
      elementsFound: foundMatches,
      listArea: itemToDraw
      });

    console.log(this.state.elementsFound);
    /*La idea es que aquí, cuando ya tengamos listo el evento, se "haga click" en los detalles...*/
    if (event != null)
      event.preventDefault();
}

setPickedElement (event){

   var pickedatSelector =  event.target.value;
   //alert(selectedItem);
   this.setState({
      pickedElement: pickedatSelector, 
   });

    if (this.state.buttonArea == null)
      this.setState({
        buttonArea: <CustomButton buttonName="buttonToShowDetails" childText="Mostrar Detalles" showFunction={this.showDetails} nameofClass="btn btn-primary btn-block" />
      });

   console.log("The Item Picked at Selector is: "+pickedatSelector);
   console.log("Current state is: "+this.state.pickedElement);

  }

  showDetails(event){
   
   // var selectedItem =  this.state.pickedElement;
    console.log("The current status to show is: "+ this.state.pickedElement);
    var indexFound = this.state.elementsFound.indexOf(this.state.pickedElement);
    console.log("found at: " +indexFound);
  
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
        <div id = "listArea" > {this.state.listArea} </div>
      </div>
      <div className="row" id="secondRow">
         {this.state.buttonArea}
      </div>
      </div>
 </div>
        );
    }

}
