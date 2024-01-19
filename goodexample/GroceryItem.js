import React from 'react';

function GroceryItem(props) {
    return (<div>
      <button onClick={props.bosh}>
        Click me
      </button>
      <br></br>
       <button onClick={props.bosh}>
        Click me again
      </button>
      </div>)
    
}

export default GroceryItem;