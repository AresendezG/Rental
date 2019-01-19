import React from "react";
import {Link} from "react-router-dom";

export class RentalHome extends React.Component{


  render(){

    var buttons_class = "btn btn-outline-primary btn-block";

    return(
<div id="Home_Dashboard">
    <table className="table table-borderless">
            <tbody>
              <tr>
                <td><Link to={"/rental/find_article"} className={buttons_class}>Buscar Articulo </Link></td>
                <td><Link to={"/rental/article_detail"} className={buttons_class}>Ingresar... </Link> </td>
              </tr>
            </tbody>
    </table>

 <div id="Home Header" className="footer jumbotron text-center">Busque o ingrese articulo para generar un nuevo ticket de renta</div>

</div>

    );
  }
}
