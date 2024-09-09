import "./FoodGrid.css";
import FoodItem from "./FoodItem"
import foodData from "../data.json"


export default function FoodGrid({ quantities, setQuantities }) {
    const foodItems = foodData.map((food, idx) => 
        <FoodItem
            key={idx}
            foodImg={food.image.desktop}
            foodType={food.category}
            foodName={food.name}
            price={food.price}
            quantity={quantities[idx]}
            setQuantity={val => setQuantities([...quantities.slice(0, idx), val, ...quantities.slice(idx+1)])}
        />
    );

    return (
        <div className="food-grid">
            {foodItems}
        </div>
    );
}
