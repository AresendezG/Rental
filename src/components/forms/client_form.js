import React from "react";
import { FormFooter } from '../msc/form_footer';


export class client_form extends React.Component
{

  constructor(props){
    super();
    };


    onSubmitForm(){
      var submit_form = window.confirm("¿Desea registrar este cliente?");
    
      if(submit_form)
      {
        alert ("alerta");
        var random = Math.floor((Math.random() * 9999) + 1000);
        var customer_register = (document.getElementById("name".value)).substr(0,2) + (document.getElementById("lastname".value)).substr(0,2) + random.toString();
        document.getElementById("cust_number").value = customer_register;
        alert("El cliente fue agregado con el registro: "+customer_register);
        
      }
      else
      {}
      alert("Enviar Formulario!");
    }   
    cancel_form(){
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
<form className="needs-validation" onSubmit = {this.onSubmitForm} validate="true" >
  <div className="form-row">
    <div className="col">
      <label htmlFor="name">Nombre</label>
      <input type="text" className="form-control" placeholder="Nombre" id="name" required />
    </div>
    <div className="col">
      <label htmlFor="lastname">Apellido</label>
      <input type="text" className="form-control" placeholder="Apellido" id="lastname" required />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="ejemplo@email.com" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="tel_number">Numero de Telefono</label>
      <input type="tel"
              pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="form-control" id="tel_number" placeholder="xxx-xxx-xxxx" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Direccion</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Calle y numero" required />
    <div className="invalid-feedback">Ingrese Calle y Numero </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Colonia</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Entre calles (o referencias)" required />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">Ciudad</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Estado</label>
      <select id="inputState" className="form-control">
        <option defaultValue>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Codigo Postal</label>
      <input type="text" className="form-control" id="inputZip" placeholder="88900" />
    </div>
  </div>
  <div className="form-group">
    <div className="form-row">
        <div className="form-group col-md3">
          <button className="btn btn-success" type="submit" >Agregar</button>
        </div>
        <div className="form-group col-md3">
            <button className="btn btn-danger" type="reset">Limpiar </button>
        </div>
        <div className="form-group col-md3">
           <button className="btn btn-primary" onClick={this.cancel_form}>Cancelar</button>
        </div>
        <div className="form-group col-md3">
           <input className="form-control" type="text" id="cust_number" value="" readOnly />
        </div>
    </div>
 </div>
</form>
<br />
<FormFooter header={"Agregar Nuevo Cliente"} info = {"Complete los campos"} />
</div>

    ); }

}
