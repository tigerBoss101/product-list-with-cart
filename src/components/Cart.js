import "./Cart.css"

import cakeImg from "../assets/images/illustration-empty-cart.svg";

export default function Cart() {
    return (
        <div id="cart">
            <h3>Your Cart (0)</h3>
            <img src={cakeImg} alt="Cake denoting empty cart" />
            <p>Your added items will appear here</p>
        </div>
    );
}