import "./FoodItem.css";

import foodImg from "../assets/images/image-waffle-desktop.jpg";
import cartImg from "../assets/images/icon-add-to-cart.svg";

export default function FoodItem() {
    return (
        <div className="food">
            <div className="food-image">
                <img src={foodImg} alt="Food" />
                <div className="cart-button">
                    <img src={cartImg} alt="Cart Icon" />
                    <p>Add to Cart</p>
                </div>
            </div>
            <div className="food-desc">
                <p className="food-type">Waffle</p>
                <p className="food-name">Waffle with Berries</p>
                <p className="price">$6.50</p>
            </div>
        </div>
    );
}