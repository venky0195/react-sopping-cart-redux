import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { productsReducer } from "./reducers/productReducers";


const initialState = {products:[]};

//Other middleware we use is chrome redux dev tools
//Using this we share all info of the store, reducers, actions to chrome dev tools
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

//last parameter middle ware. Using thunk for async requests from backend to handle this type of actions
const store = createStore(
    combineReducers({
        products: productsReducer,
        cart: cartReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;