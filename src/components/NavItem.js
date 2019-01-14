import React, {PropTypes} from 'react'
import {Route, Link} from 'react-router-dom'


export const NavItem = ({children, to, exact}) => {
    var classname_active = "nav-item nav-link active";
    var classname_inactive = "nav-item nav-link inactive"
//
//    if (exact){
//        classname_str = "nav-item nav-link active";
//    }

    return (
        <Route path={to} exact={exact} children={({match}) => (
            <li className={match ? classname_active : classname_inactive}>
                <Link to={to}>{children}</Link>
            </li>
        )}/>
    )
}


NavItem.propTypes = {
    to: String,
    exact: Boolean
    //children: Node.isRequired,
};