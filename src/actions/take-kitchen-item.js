export const TAKE_KITCHEN_ITEM = 'TAKE_KITCHEN_ITEM'

export const takeKitchenItem = (itemName) => ({
  type: TAKE_KITCHEN_ITEM,
  itemName
});