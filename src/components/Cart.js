import { useState } from "react";

import CartItem from "../components/CartItem";
import OrderModal from "./OrderModal";

import "./Cart.css"
import cakeImg from "../assets/images/illustration-empty-cart.svg";
import carbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import foodData from "../data.json";

export default function Cart({ quantities, setQuantities }) {
    const [modalOpened, setModalOpened] = useState(false);

    const sum = quantities.reduce((acc, cur) => acc + cur, 0);
    const totalPrice = foodData.reduce((acc, cur, idx) => acc + cur.price * quantities[idx], 0);
    const allData = foodData.map((data, idx) => [data, quantities[idx]])
    const cartItems = allData.filter(data => data[1] > 0)
        .map((item, idx) => {
            return (
                <CartItem
                    key={idx}
                    name={item[0].name}
                    quantity={item[1]}
                    price={item[0].price}
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
                        <button id="confirm-order" onClick={() => setModalOpened(true)}>
                            <p>Confirm Order</p>
                        </button>
                    </div>
                )
            }
            <OrderModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </div>
    );
}