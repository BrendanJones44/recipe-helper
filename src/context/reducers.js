export const TAKE_KITCHEN_ITEM = 'TAKE_KITCHEN_ITEM';
export const TAKE_PANTRY_ITEM = 'TAKE_PANTRY_ITEM';

const removePantryItem = (itemName, items) => {
  return {
    ...items,
    pantryItems: {
      ...items.pantryItems,
      ...items.pantryItems[itemName] -= 1
    },
    kitchenItems: {
      ...items.kitchenItems,
      ...items.kitchenItems[itemName] += 1
    }
  };
};

const removeKitchenItem = (itemName, items) => {
  return {
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
};

export const itemsReducer = (items, action) => {
  switch (action.type) {
    case TAKE_KITCHEN_ITEM:
      return removeKitchenItem(action.item, items);
    case TAKE_PANTRY_ITEM:
      return removePantryItem(action.item, items);
    default:
      return items;
  }
};
