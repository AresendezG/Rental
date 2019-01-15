import React from "react";
import { Form_footer } from '../msc/form_footer'; // Import

export class client_form extends React.Component
{

  constructor(props){
    super();
    };


cancelClick(){  

  var leave = window.confirm("¿Desea cancelar este registro?");
  if(leave)
    window.location.href = "/home";
  else
    document.getElementById("name").focus();
}


render(){

return(
<div id="master">

<br />
<form className="needs-validation" novalidate>
  <div className="form-row">
    <div className="col">
      <label for="name">Nombre</label>
      <input type="text" class="form-control" placeholder="Nombre" id="name" required/>
    </div>
    <div className="col">
      <label for="lastname">Apellido</label>
      <input type="text" class="form-control" placeholder="Apellido" id="lastname" required/>
    </div>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="ejemplo@email.com" />
      <div class="valid-feedback">email Valido</div>
    </div>
    <div className="form-group col-md-6">
      <label for="tel_number">Numero de Telefono</label>
      <input type="tel"
              pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="form-control" id="tel_number" placeholder="xxx-xxx-xxxx" />
    </div>
    <div class="valid-feedback">Telefono Valido</div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Direccion</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Calle y numero" required />
    <div class="invalid-feedback">Ingrese Calle y Numero </div>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Colonia</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Entre calles (o referencias)" required />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">Ciudad</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">Estado</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Codigo Postal</label>
      <input type="text" className="form-control" id="inputZip" placeholder="88900" />
    </div>
  </div>
  <div className="form-row">
        <div className="form-group col-md6">
         <button className="btn btn-success" onClick = {this.submit}>Agregar</button>
        </div>
        <div className="form-group col-md6">
         <button className="btn btn-danger" type="reset">Limpiar </button>
         </div>
         <div className="form-group col-md6">
         <button class="btn btn-primary" onClick={this.cancelClick.bind(this)}>Cancelar</button>
         </div>
 </div>
</form>
<br />
<Form_footer header={"Agregar Nuevo Cliente"} info = {"Complete los campos"} />
</div>

    ); }

}
