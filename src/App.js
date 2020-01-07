import React from 'react';

import './App.css';
import CheckTree from './components/CheckTree';
import If from './components/Logic/If';
import Map from './components/Logic/Map';

export default function App() {
  const test1 = {
    name: 'root',
    text: 'Checkbox Principal',
    value: false,
    children: [{
      name: 0,
      text: 'Primeiro filho',
      value: true,
    }, {
      name: 'intermediario',
      text: 'Segundo filho',
      value: false,
      children: [{
        name: 1,
        text: 'Primeiro filho do segundo filho',
        value: true,
      }, {
        name: 2,
        text: 'Segundo filho do segundo filho',
        value: false,
      }, {
        name: 3,
        text: 'Terceiro filho do segundo filho',
        value: false,
      }]
    }]
  };

  function getSelected(node) {
    let selected = [];
    if (node.value) {
      selected.push(node.name);
    }
    if (node.children && node.children.length>0) {
      const arr = node.children.map(getSelected);
      selected = selected.concat(...arr);
    }
    return selected;
  }

  function handleClick(e) {
    console.log(getSelected(test1));
  }

  return (
    <div className="App">
      <If
        Condition={test1}
        Then={<CheckTree node={test1}/>}
        Else={(<h4>Noting to show</h4>)}
      />
      <button onClick={handleClick}>Log selecteds</button>
    </div>
  );
}