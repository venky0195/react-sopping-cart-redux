import { FETCH_PRODUCTS } from "../types";
import { products } from '../data.json'

export const fetchProducts = () => (dispatch) => {
  const data = products;
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
}