import './App.css';
import FoodItem from "./components/FoodItem";

function App() {
  return (
    <>
      <div className="food-selection">
        <h1>Desserts</h1>
        <div className="food-items">
          <FoodItem />
          <FoodItem />
        </div>
      </div>
    </>
  );
}

export default App;
