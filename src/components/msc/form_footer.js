import React, {PropTypes} from 'react'
//import {Route, Link} from 'react-router-dom'


export const Form_footer = ({header, info}) => {

return (
<div className="jumbotron jumbotron-fluid text-center">
        <h1>{header}</h1>
        <p>{info}</p> 
</div>
    )
}

