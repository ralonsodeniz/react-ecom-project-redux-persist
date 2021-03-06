import { cartActionTypes } from "./cart.types";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden // this will return the opposite of hiddens current state
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload) // we use the function declared in cart.utils.js to update the cartItem store property with the new item or the new quantity of the alredy existing item
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload)
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case cartActionTypes.CLEAR_CART:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default cartReducer;
