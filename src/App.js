import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import Kitchen from './Kitchen';
import Recipe from './Recipe';
import Pantry from './Pantry';

import itemsReducer from './reducers/items-reducer';

const store = createStore(itemsReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Pantry />
        <Kitchen />
        <Recipe/>
      </Provider>
    </div>
  );
}

export default App;
