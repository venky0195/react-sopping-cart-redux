import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { productsReducer } from "./reducers/productReducers";


const initialState = {products:[]};

//Other middleware we use is chrome redux dev tools
//Using this we share all info of the store, reducers, actions to chrome dev tools
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
//Redux Thunk middleware allows you to write action creators that return a function instead of an action. 
//The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 
//The inner function receives the store methods dispatch and getState() as parameters.
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

//The combineReducers helper function turns an object whose values are different reducing functions 
//into a single reducing function you can pass to createStore . 
//The resulting reducer calls every child reducer, and gathers their results into a single state object.