import React from "react";
import {Link} from "react-router-dom";

export class FindArticle extends React.Component{

  render(){

    var buttons_class = "btn btn-outline-primary btn-block";

    return(
<div id="FindArticle">
        <a href="/rental/new_rent_ticket" className = "btn btn-outline-cancel btn-block">Cancelar Find </a>
        <div id="Home Header" className="footer jumbotron text-center">Detalles en el form</div>

</div>

    );
  }
}
