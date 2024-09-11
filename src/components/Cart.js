import ReactModal from "react-modal";
import "./Cart.css"

import cakeImg from "../assets/images/illustration-empty-cart.svg";
import CartItem from "../components/CartItem";
import carbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import foodData from "../data.json";

export default function Cart({ quantities, setQuantities }) {
    const sum = quantities.reduce((acc, cur) => acc + cur, 0);
    const totalPrice = foodData.reduce((acc, cur, idx) => acc + cur.price * quantities[idx], 0);
    const cartItems = foodData.map((item, idx) => {
        if (quantities[idx] === 0) {
            return <></>;
        }
        return (
            <CartItem
                key={idx}
                name={item.name}
                quantity={quantities[idx]}
                price={item.price}
                onRemove={() => {setQuantities([...quantities.slice(0,idx), 0, ...quantities.slice(idx+1)])}}
            />
        )
    });

    return (
        <div id="cart">
            <h3>Your Cart ({sum})</h3>
            { sum === 0 ?
                (
                    <div id="empty-cart">
                        <img src={cakeImg} alt="Cake denoting empty cart" />
                        <p>Your added items will appear here</p>
                    </div>
                )
                :
                (
                    <div id="cart-info">
                        {cartItems}
                        <div id="cart-total">
                            <p>Order Total</p>
                            <p>${totalPrice.toFixed(2)}</p>
                        </div>
                        <div id="carbon-neutral">
                            <img src={carbonNeutral} alt="Carbon Neutral" />
                            <p>This is a <b>carbon-neutral</b> delivery</p>
                        </div>
                        <button id="confirm-order">
                            <p>Confirm Order</p>
                        </button>
                    </div>
                )
            }
        </div>
    );
}