import React from 'react';
import './App.css';
import Products from "./components/Products"
import Cart from './components/Cart';
import store from './store';
import { Provider } from 'react-redux';
class App extends React.Component {
  //provider is a component from react redux library which accepts a value store.
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-8 col-md-12">
                <Products />
              </div>
              <div className="col-xl-4 col-md-12">
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
