import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productActions'
import { addToCart } from '../actions/cartActions'
import store from '../store'

class Products extends Component {
    // constructor(props){
    //     super(props);
    // }
    componentDidMount() {
        this.props.fetchProducts()
        console.log(store.getState())
    }
    checkIfExisting(product) {
        return store.getState().cart.cartItems.find(x => x._id === product._id)
    }

    render() {
        return (
            <div>
                <div style={{ padding: "20px 50px" }}>
                    <strong>Products</strong>
                </div>
                {!this.props.products ? (<div>Loading...</div>) :
                    (<ul className="products">
                        {this.props.products.map((product) => {
                            return (<li key={product._id}>
                                <div className="product">
                                    <span className="category">
                                        {product.category}
                                    </span>
                                    <span className="product-title">
                                        {product.title}
                                    </span>
                                    <div className="product-image-container">
                                        <img src={product.image} alt={product.title}></img>
                                    </div>
                                    <div className="text-center">
                                        {this.props.cart.find(x => x._id === product._id) ?
                                            <button style={{ pointerEvents: 'none' }} className="btn btn-success">
                                                Added To Cart
                                            </button> :
                                            <button onClick={() => this.props.addToCart(product)} className="btn btn-outline-primary">
                                                Add To Cart
                                            </button>
                                        }
                                    </div>


                                    <div className="product-price">
                                        <div>
                                            <strong>${product.price}</strong>
                                            {product.before_discount && <span className="before-discount">${product.before_discount}</span>}
                                        </div>


                                    </div>
                                </div>
                            </li>)

                        })}
                    </ul>)}
            </div>
        )
    }
}
//here we use connect, it accepts 2 params.
//1st is state which returns an object that define which part of state we are gonna use.
//2nd is list of actions which we are gonna use

//the connect function returns another function which accept parameter what name of component we are going to connect.
export default connect((state) => ({ products: state.products.items, cart: state.cart.cartItems }), {
    fetchProducts,
    addToCart
})(Products)