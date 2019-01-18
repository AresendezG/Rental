import React from "react";
import {Link} from "react-router-dom";
/*
import {client_form} from "./forms/client_form";
import { Home_Main } from "./forms/Home_Main";
*/

export class Rental_Home extends React.Component{

  

  render(){

    var buttons_class = "btn btn-outline-secondary btn-block";

    return(
<div id="Home_Dashboard">
   



    <table className="table table-borderless">
            <tbody>
              <tr>
                <td><Link to={"/rental/new_rent"} ><a href="/rental/new_rent" className = {buttons_class}>Buscar Articulo </a></Link></td>
                 <td><Link to={"/rental/find_article"} ><a href="/forms/addclient" className = {buttons_class}>Buscar Articulo </a></Link> </td>
              </tr>
            </tbody>
    </table>
 
 <div id="Home Header" className="footer jumbotron text-center">Elija una de las opciones disponibles </div>

</div>

    );
  }
}
