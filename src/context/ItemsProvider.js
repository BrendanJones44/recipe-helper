import React, { useState } from 'react';
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

const initialItems = {
  pantryItems: initialPantryItems,
  kitchenItems: initialKitchenItems
}

const ItemsProvider = props => {
  const [items, setItems] = useState(initialItems);

  const removePantryItem = (itemName) => {
    const updatedItems = {
      ...items,
      pantryItems: {
        ...items.pantryItems,
        ...items.pantryItems[itemName] -= 1
      },
      kitchenItems: {
        ...items.kitchenItems,
        ...items.kitchenItems[itemName] += 1
      }
    }
    setItems(updatedItems);
  };

  const removeKitchenItem = (itemName) => {
    const updatedItems = {
      ...items,
      pantryItems: {
        ...items.pantryItems,
        ...items.pantryItems[itemName] += 1
      },
      kitchenItems: {
        ...items.kitchenItems,
        ...items.kitchenItems[itemName] -= 1
      }
    }
    setItems(updatedItems);
  };

  return (
    <ItemsContext.Provider value={{
      pantryItems: items.pantryItems,
      kitchenItems: items.kitchenItems,
      removeKitchenItem: removeKitchenItem,
      removePantryItem: removePantryItem
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  )
}

export default ItemsProvider;