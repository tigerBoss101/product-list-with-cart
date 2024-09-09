import { useState } from 'react';
import './App.css';
import FoodGrid from "./components/FoodGrid";
import Cart from "./components/Cart";
import foodData from "./data.json";

function App() {
  const [quantities, setQuantities] = useState(Array(foodData.length).fill(0));

  return (
    <div class="App">
      <div class="container">
        <div className="food-selection">
          <h1>Desserts</h1>
          <FoodGrid quantities={quantities} setQuantities={setQuantities} />
        </div>
        <Cart quantities={quantities} />
      </div>
    </div>
  );
}

export default App;
