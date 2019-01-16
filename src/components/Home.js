import React from "react";
import {Link} from "react-router-dom";
/*
import {client_form} from "./forms/client_form";
import { Home_Main } from "./forms/Home_Main";
*/

export class Home_Dashboard extends React.Component{

  

  render(){

    var buttons_class = "btn btn-outline-secondary btn-block";

    return(
<div id="Home_Dashboard">
   
    <table className="table table-borderless">
            <tbody>
              <tr>
                <td><Link to={"/forms/new_rent"} ><a href="/forms/new_rent" className = {buttons_class}>Rentar Articulo </a></Link></td>
                <td><Link to={"/forms/new_client"} ><a href="/forms/new_client" className = {buttons_class}>Agregar Cliente </a></Link></td>
              </tr>
              <tr>
                <td><Link to={"/forms/find_article"} ><a href="/forms/addclient" className = {buttons_class}>Buscar Articulo </a></Link> </td>
                <td><Link to={"/forms/find_customer"} ><a href="/forms/addclient" className = {buttons_class}>Buscar Cliente </a></Link></td>
              </tr>
              <tr>
                <td><Link to={"/forms/sell_article"} ><a href="/forms/addclient" className = {buttons_class}>Vender Articulo(s) </a></Link></td>
                <td><Link to={"/forms/add_article"} ><a href="/forms/addclient" className = {buttons_class}>Comprar Articulo(s) </a></Link></td>
              </tr>
              <tr>
                <td><Link to={"/about"} ><a href="/about" className = {buttons_class}>About </a></Link></td>
                <td><Link to={"/help"} ><a href="/help" className = {buttons_class}>Help </a></Link></td>
              </tr> 
            </tbody>
    </table>
 
 <div id="Home Header" className="footer jumbotron text-center">Elija una de las opciones disponibles </div>

</div>

    );
  }
}


// 