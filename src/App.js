import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import AddInventory from "./pages/AddInventory/AddInventory";
import EditInventory from "./pages/EditInventory/EditInventory";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import Header from "./component/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/inventory" element={<Inventory />} />

          <Route path="/warehouses/add" element={<AddWarehouse />} />
          <Route path="/inventory/add" element={<AddInventory />} />

          <Route path="/inventory/:ID" element={<InventoryDetails />} />
          <Route path="/warehouses/:ID" element={<WarehouseDetails />} />

          <Route path="/inventory/edit/:ID" element={<EditInventory />} />
          <Route path="/warehouses/edit/:ID" element={<EditWarehouse />} />

          <Route path="*" element={<Navigate to="/warehouses" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
