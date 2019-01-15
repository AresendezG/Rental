import React from "react";
import {Link} from "react-router-dom";
import {NavItem} from "./NavItem";

//Stateless component

export const Header  = (props) => {
    return(
         <ul className="nav nav-pills nav-justified">
            <NavItem to={"/home"} children={"Home"} exact={true} />
            <NavItem to={"/about"} children={"About"} exact={true} />
            <NavItem to={"/help"} children={"Help"} exact={true} />
          </ul>
         );
    };
