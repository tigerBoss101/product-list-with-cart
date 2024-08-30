import './App.css';
import FoodItem from "./components/FoodItem";
import Cart from "./components/Cart";

function App() {
  return (
    <div class="App">
      <div class="container">
        <div className="food-selection">
          <h1>Desserts</h1>
          <div className="food-items">
            <FoodItem />
            <FoodItem />
            <FoodItem />
          </div>
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
