import React from "react";
import {Link} from "react-router-dom";
/*
import {client_form} from "./forms/client_form";
import { Home_Main } from "./forms/Home_Main";
*/

export class Home_Dashboard extends React.Component{



  render(){

    var buttons_class = "main_button";

    return(
<div id="Home_Dashboard">

      <div id="firstrow" className="row">
       <div id="btn_newTicket" className="col">
            <Link to={"/rental/new_rent_ticket"} className = {buttons_class}>Nuevo ticket de Renta</Link>
       </div>
       <div id="icon_newTicket" className="col"></div>
      </div>
      <div id="secondRow" className="row">
        <div id="sr1c" className="col"><Link to={"/forms/new_customer"} className = {buttons_class}>Agregar Cliente </Link></div>
        <div id="sr2c" className="col"><Link to={"/forms/find_customer"} className = {buttons_class}>Buscar Cliente </Link></div>
      </div>
      <div id="thirdRow" className="row">
         <div id="tr1c" className="col"><Link to={"/forms/sell_article"} className = {buttons_class}>Vender Articulo(s)</Link></div>
         <div id="tr2c" className="col"><Link to={"/forms/add_article"} className = {buttons_class}>Comprar Articulo(s)</Link></div>
      </div>
      <div id="fourthRow" className="row">
        <div id="fr1c" className="col"><Link to={"/about"} className = {buttons_class}>About </Link></div>
        <div id="fr2c" className="col"><Link to={"/help"} className = {buttons_class}>Ayuda</Link></div>
      </div>

 <div id="Footer_Main" className="footer jumbotron text-center">Elija una de las opciones disponibles </div>
</div>

    );
  }
}


//
