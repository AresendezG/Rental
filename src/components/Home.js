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
                <td><Link to={"/rental/new_rent_ticket"} className = {buttons_class}>Generar nuevo ticket de Renta </Link></td>
           {/*  <td><Link to={"/rental/find_article"} ><a href="/forms/addclient" className = {buttons_class}>Buscar Articulo </a></Link> </td> */}
              </tr>
              <tr>
                <td><Link to={"/forms/new_customer"} className = {buttons_class}>Agregar Cliente </Link></td>
                <td><Link to={"/forms/find_customer"} className = {buttons_class}>Buscar Cliente </Link></td>
              </tr>
              <tr>
                <td><Link to={"/forms/sell_article"} className = {buttons_class}>Vender Articulo(s)</Link></td>
                <td><Link to={"/forms/add_article"} className = {buttons_class}>Comprar Articulo(s)</Link></td>
              </tr>
              <tr>
                <td><Link to={"/about"} className = {buttons_class}>About </Link></td>
                <td><Link to={"/help"} className = {buttons_class}>Help</Link></td>
              </tr>
            </tbody>
    </table>

 <div id="Home Header" className="footer jumbotron text-center">Elija una de las opciones disponibles </div>

</div>

    );
  }
}


//
