import "./FoodItem.css";
import cartImg from "../assets/images/icon-add-to-cart.svg";
import increment from "../assets/images/icon-increment-quantity.svg"
import decrement from "../assets/images/icon-decrement-quantity.svg"

const context = require.context("..", true);

export default function FoodItem({ foodImg, foodType, foodName, price, quantity, setQuantity }) {
    const image = context(foodImg);
    const increaseAmount = () => setQuantity(quantity + 1);
    const decreaseAmount = () => setQuantity(quantity - 1);
    let imageStyle = {};
    if (quantity > 0) {
        imageStyle = {
            border: "3px solid #c73b0f"
        };
    }

    return (
        <div className="food">
            <div className="food-image">
                <img src={image} alt={foodName} style={imageStyle} />
                {
                    quantity === 0 ?
                    (
                        <button className="cart-button" onClick={increaseAmount}>
                            <img src={cartImg} alt="Cart Icon" />
                            <p>Add to Cart</p>
                        </button>
                    )
                    :
                    (
                        <div className="cart-button" id="active">
                            <img src={decrement} alt="decrement" onClick={decreaseAmount} />
                            <p>{quantity}</p>
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