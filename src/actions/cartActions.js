import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from "../types";

export const addToCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    let alreadyExists = false;
    cartItems.forEach((x) => {
        if (x._id === product._id) {
            alreadyExists = true;
            x.count++;
        }
    });
    if (!alreadyExists) {
        cartItems.push({ ...product, count: 1 });
    }
    dispatch({
        type: ADD_TO_CART,
        payload: { cartItems },
    });
};
export const changeQuantity = (product, quantity) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    cartItems.forEach((x) => {
        if (x._id === product._id) {
            x.count = quantity
        }
    });
    dispatch({
        type: CHANGE_QUANTITY,
        payload: { cartItems },
    });
};
export const removeFromCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice()
        .filter((x) => x._id !== product._id);
    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};