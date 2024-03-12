import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome</header>

      <BrowserRouter>
      <Routes>
        <Route path="/Warehouses" element={<Warehouses />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/Inventory/:ID" element={<InventoryDetails />} />
        <Route path="/Warehouses/:ID" element={<WarehouseDetails />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
