import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart, changeQuantity } from '../actions/cartActions'

class Cart extends Component {
    changeQuantity = (event, product) => {
        if (event.target.value > 99) {
            return
        }
        this.props.changeQuantity(product, event.target.value)
    }
    onKeyDown(e) {
        if (!((e.keyCode > 95 && e.keyCode < 106)
            || (e.keyCode > 47 && e.keyCode < 58)
            || e.keyCode === 8)) {
            e.preventDefault()
        }
    }
    maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }
    render() {
        const { cartItems } = this.props
        return (
            <div>
                <div style={{ padding: "20px 0px", borderBottom: "1px solid #f6f6f6" }}>
                    <strong>Cart</strong>
                </div>
                {cartItems.length === 0 && <div className="cart-content">Cart is Empty</div>}
                {cartItems.length > 0 &&
                    <div className="cart-content">
                        <ul className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item._id}>
                                    <span>
                                        <button onClick={() => this.props.removeFromCart(item)} type="button" className="close" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </span>
                                    <li>
                                        <div className="cart-item-image">
                                            <img src={item.image} alt={item.title}></img>
                                        </div>
                                        <div style={{ width: "-webkit-fill-available" }}>
                                            <div className="cart-item-title">{item.title}</div>
                                            <div style={{ fontSize: "12px" }}> Availability: <span className="color-orange">{item.availability}</span></div>
                                            <div className="row">
                                                <span className=" col-xl-6 col-sm-12 color-orange">${item.price}</span>
                                                <span className=" col-xl-6 col-sm-12 cart-item-quantity">Qty: <input onInput={this.maxLengthCheck} value={item.count} min="1" maxLength="2" placeholder={item.count} max="99" onChange={(e) => this.changeQuantity(e, item)} onKeyDown={this.onKeyDown} type="number" /></span>
                                            </div>

                                        </div>
                                    </li>
                                </div>
                            ))}
                        </ul>

                        <div className="cart">
                            <div>
                                Total:
                            </div>
                            <div>$
                                {
                                    cartItems.reduce((a, c) => a + c.price * c.count, 0).toFixed(2)
                                }
                            </div>
                        </div>
                    </div>}
            </div>
        )
    }
}
export default connect(
    (state) => ({
        cartItems: state.cart.cartItems,
    }),
    { removeFromCart, changeQuantity }
)(Cart);