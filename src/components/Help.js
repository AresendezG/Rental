import React from "react";
import {Link} from "react-router-dom";
//import {Header} from "../components/Header";

export const Help = (props) => {

    return(
        <div className = "container">
            <h3>Ésta aplicación cuenta con las siguientes funciones:</h3>
            <ul>
                <li>Crear un nuevo Ticket de renta, permite buscar y elegir articulos para rentar </li>
                <li>Agregar un cliente permite registrar los datos de un nuevo cliente</li>
                <li>Se puede usar la opción de comprar o vender articulos </li>
                <li><Link to={"/"} className ="btn btn-primary">Regresar al inicio </Link></li>

            </ul>
            </div>
    );

}
