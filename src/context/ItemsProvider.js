import React from 'react';
import ItemsContext from './items-context';

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

class ItemsProvider extends React.Component {
  state = {
    pantryItems: initialPantryItems,
    kitchenItems: initialKitchenItems
  }

  removePantryItem = (itemName) => {
    const { pantryItems, kitchenItems } = this.state;
    pantryItems[itemName] -= 1;
    kitchenItems[itemName] += 1;
    this.setState({
      pantryItems,
      kitchenItems
    })
  };

  removeKitchenItem = (itemName) => {
    const { pantryItems, kitchenItems } = this.state;
    pantryItems[itemName] += 1;
    kitchenItems[itemName] -= 1;
    this.setState({
      pantryItems,
      kitchenItems
    })
  };

  render() {
    return (
      <ItemsContext.Provider value={{
        pantryItems: this.state.pantryItems,
        kitchenItems: this.state.kitchenItems,
        removeKitchenItem: this.removeKitchenItem,
        removePantryItem: this.removePantryItem
        }}
      >
        {this.props.children}
      </ItemsContext.Provider>
    )
  }
}

export default ItemsProvider;