import React from "react";
import {NavItem} from "./msc/NavItem";

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
