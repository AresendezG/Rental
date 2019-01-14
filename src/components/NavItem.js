import React, {PropTypes} from 'react'
import {Route, Link} from 'react-router-dom'


export const NavItem = ({children, to, exact}) => {
    var classname_active = "nav-item nav-link active";
    var classname_inactive = "nav-item nav-link inactive"
    var link_classname_active = "badge badge-dark";
    var link_classname_inactive = "badge badge-light";
//
//    if (exact){
//        classname_str = "nav-item nav-link active";
//    }

    return (
        <Route path={to} exact={exact} children={({match}) => (
            <li className={match ? classname_active : classname_inactive}>
                <Link to={to} ><div className ={match ? link_classname_active : link_classname_inactive} >{children}</div> </Link>
            </li>
        )}/>
    )
}

