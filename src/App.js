import './App.css';
import FoodGrid from "./components/FoodGrid";
import Cart from "./components/Cart";

function App() {
  return (
    <div class="App">
      <div class="container">
        <div className="food-selection">
          <h1>Desserts</h1>
          <FoodGrid />
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
