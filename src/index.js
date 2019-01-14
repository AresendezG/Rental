import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { User } from "./components/User";
import { About } from "./components/About";

class App extends React.Component {
    
    render(){
        return(   
 <div ref = "master" className = "container">         
   
    <BrowserRouter>
      <div>     
        <Header />        
        <Switch>        
            <Route exact path="/" component={Home}/>
            <Route path="/user" component={User}/> 
            <Route path="/about" component={About}/> 
            <Route path="/home" component={Home}/> 
        </Switch>
     </div>           
    </BrowserRouter>         
 </div>      
        );
    }

} 



render(<App/>, window.document.getElementById("app"));

 