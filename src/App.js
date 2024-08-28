import './App.css';
import FoodItem from "./components/FoodItem";

function App() {
  return (
    <>
      <h1>Desserts</h1>
      <div className="foodItems">
        <FoodItem />
        <FoodItem />
      </div>
    </>
  );
}

export default App;
