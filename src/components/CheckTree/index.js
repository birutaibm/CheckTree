import React, { useState } from 'react';

import './style.css';

export default function CheckTree({ node }) {
  const [value, setValue] = useState(node.value);

  function handleClick(e) {
    setValue(!value);
  }

  return (
    <div className="CheckTree-container">
      <input 
        type="checkbox" 
        name={node.name}
        id={node.name}
        checked={value}
        onChange={handleClick}
      />
      <label htmlFor={node.name}>{node.text}</label>
    </div>
  );
}