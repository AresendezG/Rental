import React from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
/*
import {client_form} from "./forms/client_form";
import { Home_Main } from "./forms/Home_Main";
*/

export class Home_Dashboard extends React.Component{

  render(){
    return(
<div id="Home_Dashboard">
    <table className="table table-borderless table-dark">
            <tbody>
              <tr>
                <td><Link to={"/forms/addclient"} ><a href="/forms/addclient" className = "btn btn-outline-light btn-block">Agregar cliente </a></Link></td>
                <td><Link to={"/forms/newclient"} ><a href="/forms/newclient" className = "btn btn-outline-light btn-block">Buscar Cliente </a></Link></td>
              </tr>
              <tr>
                <td><Link to={"/forms/addclient"} ><a href="/forms/addclient" className = "btn btn-outline-light btn-block">Agregar cliente </a></Link> </td>
                <td><Link to={"/forms/addclient"} ><a href="/forms/addclient" className = "btn btn-outline-light btn-block">Agregar cliente </a></Link></td>
              </tr>
              <tr>
                <td><Link to={"/forms/addclient"} ><a href="/forms/addclient" className = "btn btn-outline-light btn-block">Agregar cliente </a></Link></td>
                <td><Link to={"/forms/addclient"} ><a href="/forms/addclient" className = "btn btn-outline-light btn-block">Agregar cliente </a></Link></td>
              </tr>
              <tr>
                <td><Link to={"/about"} ><a href="/about" className = "btn btn-outline-light btn-block">About </a></Link></td>
                <td><Link to={"/help"} ><a href="/help" className = "btn btn-outline-light btn-block">Help </a></Link></td>
              </tr> 
            </tbody>
    </table>    
</div>

    );
  }
}


// 