import React from "react";

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
        allRecordsFound: [
            ["Not Selected", "N/A","N/A 1","N/A 1","N/A 1"], 
            ["Not Selected", "N/A 2","N/A 2","N/A 2","N/A 2"],
            ["element3", "Color 3","style 3","Price 3","Picture 3"],
            ],
        serialsList: [],     
        pickedElement: "null",
        pickedIndex: 0,
        formArea : "Cick en boton Buscar para buscar un artículo",
        listArea : null,
        buttonArea: null
      };

      this.getElementstoShow = this.getElementstoShow.bind(this);
      this.setPickedElement = this.setPickedElement.bind(this);
      this.showDetails = this.showDetails.bind(this);
      this.addToCartFnc = this.addToCartFnc.bind(this);

  };

  componentDidMount(){
    this.buttonFind.current.click();
  }


  changeActive = event => {
    var userNewSearch = true; //Boolean to check if user wants to query again...
    const name = event.target.name; //Which click?
    var itemToDraw, drawListArea, drawButtonArea;
    //const value = this.state([name]);
    switch(name){
      case "Find":
        userNewSearch = window.confirm("¿Desea Ingresar una nueva busqueda?");
        if(userNewSearch)
        {
        itemToDraw = <FindArticle findFunction={this.getElementstoShow} />;
        drawListArea = null;
        drawButtonArea = null;
        }
      break;
      case "Details":
        console.log("Array que se pasó: ");
        console.log(this.state.allRecordsFound[this.state.pickedIndex]);
        itemToDraw = <ArticleDetail SelectedArticleArray = {this.state.allRecordsFound[this.state.pickedIndex]} addToCartFncProp={this.addToCartFnc} />;
        drawListArea = <Listofitems itemstoshow={this.state.elementsFound}/>;
        drawButtonArea= <CustomButton buttonName="buttonToShowDetails" childText="Mostrar Detalles" showFunction={this.showDetails} nameofClass="btn btn-primary btn-block" />

      break;
      case "Cancel":
          if(window.confirm("¿Desea cancelar el ticket? Se perdera el avance"))
           {window.location.replace("/");}
      break;
      case "Cart":
      break;
      default:
      break;

    }
   if(userNewSearch)
    this.setState({
        optionActive: name,
        formArea: itemToDraw,
        listArea: drawListArea,
        buttonArea: drawButtonArea
    });

}


getElementstoShow(event){
    var num;
    var subArray = [];
    var listArray = [];
    var elementsFoundArray =[];

    //crea un array falso de 5 elementos con 5 Características cada uno.

    for (var i=0; i<5; i++){
      
      subArray = [];

      num = Math.floor((Math.random() * 9999) + 1000);
      subArray[0] = num.toString();
      subArray[1] = "Color Example:"+i.toString();
      subArray[2] = "Style Ex:" +i.toString();
      subArray[3] = "Price: $"+num.toString();
      subArray[4] = "Picture:"+i.toString();
      listArray[i] = num.toString();
      elementsFoundArray[i] = subArray;
    }
    
    /*Found Matches simulates a Query to database (2D Array of Columns + Records) */
    /*Given a 2D Array, pick element 0 to display "Serials" */
    //  console.log("Elements in subarray");
    //  console.log(elementsFoundArray);

    var itemToDraw = <Listofitems itemstoshow={listArray} idname="MatchesFound" nameofClass="listContainer" labelstr="Articulos Encontrados:" focusFunction={this.setPickedElement}/> ;
    this.setState({
     listArea: itemToDraw,
     serialsList: listArray,
     allRecordsFound: elementsFoundArray

    });

    //console.log(this.state.elementsFound);
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
    var indexFound = this.state.serialsList.indexOf(this.state.pickedElement);
      this.setState({
        pickedIndex: indexFound
      });

    console.log("found at: " +indexFound);
    var itemToDraw = <ArticleDetail SelectedArticleArray = {this.state.allRecordsFound[indexFound]} />;
    this.setState({
      formArea : itemToDraw,
      optionActive: "Details"
    });
    //this.buttonDetails.current.click(); 
  }

  addToCartFnc(){
    if(window.confirm("¿Desea añadir este articulo al carrito de compras?"))
      window.alert("Agregado");
    else
      window.alert("No agregado! ");

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
