import React from "react";
import GroceryItem from "./GroceryItem.js";

function App() {
  function handleClick() {
    alert(`You clicked the button`);
  }
  return  (
      <GroceryItem bosh={handleClick}/>)
    
}

export default App;
