import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Home_Dashboard } from "./components/Home";
import { client_form } from "./components/forms/client_form";
import { About } from "./components/About";
import { Help } from "./components/Help"

class App extends React.Component {

    render(){
        return(
 <div ref = "master" className = "container">

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home_Dashboard}/>
            <Route path="/home" component={Home_Dashboard}/>
            <Route path="/about" component={About}/>
            <Route path="/help" component={Help}/>
            <Route path="/forms/new_client" component={client_form}/>
        </Switch>
    </BrowserRouter>
 </div>
        );
    }

}



render(<App/>, window.document.getElementById("app"));
