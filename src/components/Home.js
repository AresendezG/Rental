import React from "react";

export class Home extends React.Component{

  render(){
    return(
<table className = "table table-borderless">
    <row>
        <column>
        <div class="btn-group-vertical">
            <button type="button" class="btn btn-secondary">1</button>
            <button type="button" class="btn btn-secondary">2</button>
            <div class="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                 <a class="dropdown-item" href="#">Dropdown link 1</a>
                 <a class="dropdown-item" href="#">Dropdown link 2</a>
             </div>
             </div>
            </div>
        </column>
        <column>
        <div class="btn-group-vertical">
            <button type="button" class="btn btn-secondary">Button 1</button>
            <button type="button" class="btn btn-secondary">Button 2</button>
            <div class="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                 <a class="dropdown-item" href="#">Dropdown link 3</a>
                 <a class="dropdown-item" href="#">Dropdown link 4</a>
             </div>
             </div>
            </div>        
        </column>
    </row>
    

</table>



    );
  }
}


// 