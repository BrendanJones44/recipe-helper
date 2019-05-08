import { TAKE_KITCHEN_ITEM } from '../actions/take-kitchen-item';
import { TAKE_PANTRY_ITEM } from '../actions/take-pantry-item';

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

const initialState = {
  pantryItems: initialPantryItems,
  kitchenItems: initialKitchenItems
}

export default function itemsReducer(state = initialState, { type, itemName }) {
  switch (type) {
    case TAKE_PANTRY_ITEM:    
      return {
        ...state,
        pantryItems: {
          ...state.pantryItems,
          ...state.pantryItems[itemName] -= 1
        },
        kitchenItems: {
          ...state.kitchenItems,
          ...state.kitchenItems[itemName] += 1
        }
      }
    case TAKE_KITCHEN_ITEM:
      return {
        ...state,
        pantryItems: {
          ...state.pantryItems,
          ...state.pantryItems[itemName] += 1
        },
        kitchenItems: {
          ...state.kitchenItems,
          ...state.kitchenItems[itemName] -= 1
        }
      }
    default:
      return state;
  }
}