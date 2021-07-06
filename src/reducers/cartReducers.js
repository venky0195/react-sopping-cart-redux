import { ADD_TO_CART, CHANGE_QUANTITY, REMOVE_FROM_CART } from "../types";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("IN CART REDUCERS")
            return { cartItems: action.payload.cartItems };
        case REMOVE_FROM_CART:
            return { cartItems: action.payload.cartItems };
        case CHANGE_QUANTITY:
            return { cartItems: action.payload.cartItems };
        default:
            return state;
    }
};
