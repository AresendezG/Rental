import React from "react";

export class Listofitems extends React.Component{

  constructor(props){
  super(props);

  this.state = {
    list_items: props.itemstoshow,
    idname: props.idname

  };
};

render(){
  return(
    <div id={this.state.idname}>
    <div className="form-group">
      <label htmlFor="ArticleList">Articulos encontrados: </label>
      <select  className="form-control" id="ArticleList">

    {
      this.state.list_items.map((item) => <option key={item}>{item}</option>)

        }
      </select>
    </div>
    </div>

  )

}
}
