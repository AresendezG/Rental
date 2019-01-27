import React from "react";
import {render} from "react-dom";
import './stylesheet.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Home_Dashboard } from "./components/Home";
import { client_form } from "./components/forms/client_form";
import { RentalDashboard } from "./components/rental/rental_dashboard";
import { About } from "./components/About";
import { Help } from "./components/Help"

class App extends React.Component {

    render(){
        return(
 <div id = "master" className = "container">
    <div id="app_header" className="header_custom">
        <br />
        <h1>MDR Rental Application</h1>
        <br />
    </div>

    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Home_Dashboard}/>
            <Route path="/home" component={Home_Dashboard}/>
            <Route path="/about" component={About}/>
            <Route path="/help" component={Help}/>
            <Route path="/forms/new_customer" component={client_form}/>
            <Route path="/rental/new_rent_ticket" component={RentalDashboard}/>
        </Switch>
    </BrowserRouter>
 </div>
        );
    }

}



render(<App/>, window.document.getElementById("app"));
