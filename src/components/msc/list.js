import React from "react";

export class Listofitems extends React.Component{

  constructor(props){
  super(props);

  this.state = {
    list_items: props.itemstoshow,
    idname: props.idname,
    nameofClass: props.nameofClass,
    labelstr: props.labelstr

  };
};

render(){
  return(
      <div className={this.state.nameofClass}>
      <label htmlFor={this.state.idname}>{this.state.labelstr}</label>
      <select  className="form-control" id={this.state.idname} onFocus={this.props.focusFunction} onChange={this.props.focusFunction}>     {
             this.props.itemstoshow.map((item) => <option key={item}>{item}</option>)
         }
      </select>
      </div>
  )
}
}
