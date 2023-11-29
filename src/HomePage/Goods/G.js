import React from 'react'
import "./goods.css"
import Oil from "../../resources/images/oil.png"

function G() {
  return (
    <div>
      <div class="goods">
    <h2>Goods</h2>
    <button>Edit Quantity</button></div>
    <img src={Oil} alt=""></img>
    </div>
  )
}

export default G