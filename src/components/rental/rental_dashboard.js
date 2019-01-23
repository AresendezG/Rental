import React from "react";

import {RentalHome} from "./rental_home";
import {ArticleDetail} from "./article_detail";
import {FindArticle} from "./find_article";
import {FinishTicket} from "./finish_ticket";

export class RentalDashboard extends React.Component {

    render(){
        return(

 <div ref = "master_dashboard" className = "container">
    <div className="container" id="skeleton_grid">
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">
        <div className="btn-group-vertical" role="group" aria-label="Control">
            <button type="button" className="btn btn-outline-success">Buscar un articulo</button>
            <button type="button" className="btn btn-outline-success">Ver detalles</button>
            <button type="button" className= "btn-outline-success">Ver Carrito de compra</button>
            <button type="button" className= "btn-outline-warning">Limpiar Busqueda</button>
            <button type="button" className= "btn-outline-danger">Regresar </button>
          </div>
         

        </div>
        <div class="col-md-auto">
          Variable width content
        </div>
        <div class="col col-lg-2">
         Column 3 of 4
        </div>
        <div class="col col-lg-2">
         Column 4
        </div>
      </div>
      </div>


 </div>
        );
    }

}
