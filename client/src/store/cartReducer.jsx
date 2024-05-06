import { ADD_TO_CART, REMOVE_ITEM } from "./actionType";

const initState = {
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = action.item.product;
    let itemAmount = action.item.amount;

    let existed_item = state.addedItems.find(
      (item) => addedItem._id === item._id
    );

    if (existed_item) {
      let updatedItem = { ...existed_item };
      updatedItem.quantity += parseInt(itemAmount);

      let updatedAddedItems = state.addedItems.map((item) =>
        item._id === existed_item._id ? updatedItem : item
      );

      return {
        ...state,
        addedItems: updatedAddedItems,
        total: state.total + addedItem.price * itemAmount,
      };
    } else {
      addedItem.quantity = parseInt(itemAmount);
      let newTotal = state.total + addedItem.price * itemAmount;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  } else if (action.type === REMOVE_ITEM) {
    let existed_item = state.addedItems.find((item) => action.id === item._id);

    if (existed_item.quantity > 1) {
      let updatedItem = { ...existed_item };
      updatedItem.quantity -= 1;

      let updatedAddedItems = state.addedItems.map((item) =>
        item._id === existed_item._id ? updatedItem : item
      );

      return {
        ...state,
        addedItems: updatedAddedItems,
        total: state.total - existed_item.price,
      };
    } else {
      let existed_item = state.addedItems.find(
        (item) => action.id === item._id
      );
      let new_items = state.addedItems.filter((item) => action.id !== item._id);

      let newTotal = state.total - existed_item.price * existed_item.quantity;

      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    }
  } else {
    return state;
  }
};

export default cartReducer;