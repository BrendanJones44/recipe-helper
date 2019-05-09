import React from 'react';
import './App.css';

import Pantry from './Pantry';
import Kitchen from './Kitchen';
import Recipe from './Recipe';

import ItemsProvider from './context/ItemsProvider';

function App() {
  return (
    <div className="App">
      <ItemsProvider>
        <Pantry />
        <Kitchen />
        <Recipe />
      </ItemsProvider>
    </div>
);
}

export default App;
