import "./FoodGrid.css";
import FoodItem from "./FoodItem"
import foodData from "../data.json"

const foodItems = foodData.map((food, idx) => 
    <FoodItem
        key={idx}
        foodImg={food.image.desktop}
        foodType={food.category}
        foodName={food.name}
        price={food.price}
    />
);

export default function FoodGrid() {
    return (
        <div className="food-grid">
            {foodItems}
        </div>
    );
}
