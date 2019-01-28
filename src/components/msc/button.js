import React from 'react'
//import {Route, Link} from 'react-router-dom'

export const CustomButton = (props) => {
return (
    <button id={props.buttonName} onClick={props.showFunction} className = {props.nameofClass}>{props.childText}</button>
    )
}
