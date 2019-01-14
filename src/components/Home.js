import React from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import {client_form} from "./forms/client_form";
import {Header} from "./Header";


export class Home extends React.Component{

  render(){
    return(
<div id="HomeComponent">
<BrowserRouter>
<Switch>
    <Route path={"/home/addclient"} component = {client_form}></Route>
    <Route path={"/home/newclient"} component = {client_form} ></Route>
</Switch>
</BrowserRouter>
<table className="table table-borderless table-dark">
  <tbody>
    <tr>
      <td><Link to={"/forms/addclient"} ><a className = "btn btn-outline-light btn-block" >Agregar cliente </a></Link></td>
      <td><Link to={"/forms/newclient"} ><a className = "btn btn-outline-light btn-block">Buscar Cliente </a></Link></td>
    </tr>
    <tr>
      <td><button id="find_art_btn"> Buscar Articulo</button> </td>
      <td><button id="find_cust_btn">Buscar Cliente </button> </td>
    </tr>
    <tr>
      <td><button id="find_art_btn"> Buscar Articulo</button></td>
      <td><button id="find_cust_btn">Buscar Cliente </button></td>
    </tr>
  </tbody>
</table>

</div>

    );
  }
}


// 