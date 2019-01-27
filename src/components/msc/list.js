import React from "react";

export class Listofitems extends React.Component{

  constructor(props){
  super(props);

  this.state = {
    list_items: props.itemstoshow

  };
};

render(){
  return(
    <div id="col2" className="col col-lg-3">
    <div className="form-group">
      <label htmlFor="ArticleList">Example Article List</label>
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
