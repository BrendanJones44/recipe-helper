import React from 'react';
import './App.css';

import List from './List';
import Recipe from './Recipe';

const initialPantryItems = {
  Strawberries: 5,
  Bananas: 2,
  Kiwis: 4,
  Blueberries: 10
}

const initialKitchenItems = {
  Strawberries: 0,
  Bananas: 0,
  Kiwis: 0,
  Blueberries: 0
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pantryItems: initialPantryItems,
      counterItems: initialKitchenItems
    }
    this.removePantryItem = this.removePantryItem.bind(this);
    this.removeKitchenItem = this.removeKitchenItem.bind(this);
  }

  removePantryItem(itemName) {
    const { pantryItems, counterItems } = this.state;
    pantryItems[itemName] -= 1;
    counterItems[itemName] += 1;
    this.setState({
      pantryItems,
      counterItems
    })
  };

  removeKitchenItem(itemName) {
    const { pantryItems, counterItems } = this.state;
    pantryItems[itemName] += 1;
    counterItems[itemName] -= 1;
    this.setState({
      pantryItems,
      counterItems
    })
  };

  render() {
    return (
      <div className="App">
        <List name="My Pantry" items={this.state.pantryItems} onItemButtonPress={this.removePantryItem} />
        <List name="My Kitchen Counter" items={this.state.counterItems} onItemButtonPress={this.removeKitchenItem}/>
        <Recipe kitchenItems={this.state.counterItems}/>
      </div>
    );
  }
}

export default App;
