import React from 'react'
//import {Route, Link} from 'react-router-dom'


export const FormFooter = ({header, info}) => {

return (
<div className="footer jumbotron jumbotron-fluid text-center">
        <h1>{header}</h1>
        <p>{info}</p> 
</div>
    )
}

