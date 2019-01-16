
export class FormFunctions {
    constructor(){

    }

    cancelClick(caller){  

        var leave = window.confirm("¿Desea cancelar este registro?");
        if(leave)
          window.location.href = "/home";
        else
          document.getElementById(caller).focus();
      }

      submit_form(      
        confirm_message,
        element1,
        element2,
        register_html_id 
      ){
        var submit_form = window.confirm(confirm_message);
      
        if(submit_form)
        {
          var random = Math.floor((Math.random() * 9999) + 1000);
          var customer_register = (element1).substr(0,2) + (element2).substr(0,2) + random.toString();
          document.getElementById(register_html_id).value = customer_register;
          alert("El cliente fue agregado con el registro: "+customer_register);
        }
        else
        {}
        alert("Enviar Formulario!");
      }   

}


export class SubmitFormServer
{
    constructor(){}

    send(){
        alert("sending data!");
    }
}