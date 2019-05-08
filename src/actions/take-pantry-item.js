export const TAKE_PANTRY_ITEM = 'TAKE_PANTRY_ITEM'

export const takePantryItem = (itemName) => ({
  type: TAKE_PANTRY_ITEM,
  itemName
});