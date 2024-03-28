import React, { useContext } from 'react'
import './CartItems.css'
import { Restauto } from '../../Context/Restauto'

export const CartItems = () => {
    const {getTotalCartAmount,products,cartItems,removeFromCart} = useContext(Restauto)
  return (
    <div className='cartItems'>
        <div className="cartItems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {products.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                            <div className="cartItems-formats cartItems-format-main">
                                <img src={e.image} alt="" className='cartIcon-product-icon'/>
                                <p>{e.name}</p>
                                <p>{e.new_price} Ugx</p>
                                <button className="cartItems-quantity">{cartItems[e.id]}</button>
                                <p>{e.new_price*cartItems[e.id]} Ugx</p>
                                <p className='remove-icon' onClick={()=>{removeFromCart(e.id)}}>X</p>
                            </div>
                            <hr />
                        </div>
            }
            return null
        })}
        <div className="cartItems-down">
            <div className="cartItems-Totals">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartItems-totals-item">
                        <p>Subtotal</p>
                        <p>{getTotalCartAmount()} Ugx</p>
                    </div>
                    <hr />
                    <div className="cartItems-totals-item">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartItems-totals-item">
                        <h3>Total</h3>
                        <h3>{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECK OUT</button>
            </div>
            <div className="promo-code">
                <p>If you have a promo code, Enter it here</p>
                <div className="promo-box">
                    <input type="text" placeholder='Promo code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
