import React, { useReducer } from 'react';
import ItemsContext from './items-context';

import { itemsReducer, TAKE_KITCHEN_ITEM, TAKE_PANTRY_ITEM } from './reducers';

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
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const removePantryItem = (itemName) => {
    dispatch({ type: TAKE_PANTRY_ITEM, item: itemName });
  };

  const removeKitchenItem = (itemName) => {
    dispatch({ type: TAKE_KITCHEN_ITEM, item: itemName });
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