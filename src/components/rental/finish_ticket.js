import React from "react";

export class FinishTicket extends React.Component{

  render(){

    //var buttons_class = "btn btn-outline-primary btn-block";

    return(
<div id="FindArticle">

 <a href="/rental/new_rent_ticket" className = "btn btn-outline-cancel btn-block">Cancelar </a>
 <div id="Home Header" className="footer jumbotron text-center">Este componente mostrara el carrito de compras y los articulos</div>

</div>

    );
  }
}
