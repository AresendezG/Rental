import React from "react";

export const PriceInput = ({label}) =>
{
  return(
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">{label}: $</span>
      </div>
      <input type="number" min="50" max="1000" className="form-control"/>
      <div className="input-group-append">
        <span className="input-group-text">.00</span>
      </div>
    </div>

  )
}
