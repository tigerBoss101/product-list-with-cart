import { useState } from "react";

import "./FoodItem.css";
import cartImg from "../assets/images/icon-add-to-cart.svg";
import increment from "../assets/images/icon-increment-quantity.svg"
import decrement from "../assets/images/icon-decrement-quantity.svg"

const context = require.context("..", true);

export default function FoodItem({ foodImg, foodType, foodName, price }) {
    const [amount, setAmount] = useState(0);

    const image = context(foodImg);
    const increaseAmount = () => setAmount(prev => prev + 1);
    const decreaseAmount = () => setAmount(prev => prev > 0 ? prev - 1 : 0);
    let imageStyle = {};
    if (amount > 0) {
        imageStyle = {
            border: "3px solid #c73b0f"
        };
    }

    return (
        <div className="food">
            <div className="food-image">
                <img src={image} alt={foodName} style={imageStyle} />
                {
                    amount === 0 ?
                    (
                        <div className="cart-button" onClick={increaseAmount}>
                            <img src={cartImg} alt="Cart Icon" />
                            <p>Add to Cart</p>
                        </div>
                    )
                    :
                    (
                        <div className="cart-button" id="active">
                            <img src={decrement} alt="decrement" onClick={decreaseAmount} />
                            <p>{amount}</p>
                            <img src={increment} alt="increment" onClick={increaseAmount} />
                        </div>
                    )
                }
            </div>
            <div className="food-desc">
                <p className="food-type">{foodType}</p>
                <p className="food-name">{foodName}</p>
                <p className="price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
}