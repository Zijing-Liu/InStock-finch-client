import React from "react";
import "./InventoryList.scss";
import searchLogo from "../../assets/Icons/search-24px.svg";
import sort from "../../assets/Icons/sort-24px.svg";
import InventoryCard from "../InventoryCard/InventoryCard.jsx";
import { useNavigate } from "react-router-dom";

function InventoryList({ inventoryData, warehouseData, setInventoryData }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/inventory/add");
  };

  const getWarehouseName = (inventoryItemId) => {
    const inventoryItem = inventoryData.find(
      (item) => item.id === inventoryItemId
    );
    if (inventoryItem) {
      const warehouseId = inventoryItem.warehouse_id;
      const matchingWarehouse = warehouseData.find(
        (warehouse) => warehouse.id === warehouseId
      );
      return matchingWarehouse
        ? matchingWarehouse.warehouse_name
        : "Unknown Warehouse";
    } else {
      return "Unknown Inventory Item";
    }
  };

  const inventoryObj = {
    title: "Inventory",
    button: "+ Add New Item",
  };

  return (
    <section>
      <div className="list__main-container">
        <h1 className="list__title-text">{inventoryObj.title}</h1>
        <div className="list__search-container">
          <input
            className="list__search"
            type="text"
            name="search-bar"
            placeholder="Search..."
          ></input>
          <button className="list__search-btn">
            <img src={searchLogo} className="list__search-img" alt="sort" />
          </button>
        </div>
        <button className="list__btn" onClick={handleClick}>
          {inventoryObj.button}
        </button>
      </div>

      <div className="list__header">
        <div className="list__icons list__inventory">
          <h2 className="list__table-header">Inventory Item</h2>{" "}
          <img src={sort} alt="sort" />
        </div>
        <div className="list__icons list__category">
          <h2 className="list__table-header">Category</h2>{" "}
          <img src={sort} alt="sort" />
        </div>
        <div className="list__icons list__status-1">
          <h2 className="list__table-header">Status</h2>{" "}
          <img src={sort} alt="sort" />
        </div>
        <div className="list__icons list__qty">
          <h2 className="list__table-header">Qty</h2>{" "}
          <img src={sort} alt="sort" />
        </div>
        <div className="list__icons list__w-name">
          <h2 className="list__table-header">Warehouse</h2>{" "}
          <img src={sort} alt="sort" />
        </div>
        <h2 className="list__table-header list__action">Actions</h2>
      </div>

      {inventoryData &&
        warehouseData &&
        inventoryData.map((inventoryItem) => (
          <InventoryCard
            inventory={inventoryItem}
            key={inventoryItem.id}
            getWarehouseName={getWarehouseName}
            setInventoryData={setInventoryData}
            inventoryData={inventoryData}
          />
        ))}
    </section>
  );
}

export default InventoryList;
