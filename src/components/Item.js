import React, { useState } from "react";
import items from "../data/items";

function Item({ name, category }) {

  const [item, setItem] = useState(<li className="in-cart"></li>)

  function handleChange(){
      setItem((item) => !item);
  }

  const addToCart = item ? <li className="in-cart"></li> : <li className=""></li>


  return (
    <li className="in-cart">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleChange} className={"add"}>{item ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
