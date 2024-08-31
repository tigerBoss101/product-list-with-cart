import "./FoodItem.css";

import cartImg from "../assets/images/icon-add-to-cart.svg";
import waffle from "../assets/images/image-waffle-desktop.jpg"

export default function FoodItem({ foodImg, foodType, foodName, price }) {
    return (
        <div className="food">
            <div className="food-image">
                <img src={waffle} alt={foodName} />
                <div className="cart-button">
                    <img src={cartImg} alt="Cart Icon" />
                    <p>Add to Cart</p>
                </div>
            </div>
            <div className="food-desc">
                <p className="food-type">{foodType}</p>
                <p className="food-name">{foodName}</p>
                <p className="price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
}