import React from 'react';

import './App.css';
import CheckTree from './components/CheckTree';

export default function App() {
  const test1 = {
    name: 0,
    text: 'Texto do checkbox',
    value: false
  };

  return (
    <div className="App">
      <CheckTree node={test1}/>
    </div>
  );
}