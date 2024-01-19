import React from 'react';

function Button(props) {
  
    return (
      <button>{props.text || 'Default Text of Big Button'}</button>
    );
}



export default Button;