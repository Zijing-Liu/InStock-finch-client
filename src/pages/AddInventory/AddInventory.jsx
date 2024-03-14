import React from "react";
import "./AddInventory.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
function AddInventory() {
  return (
    <div className="add-inventory">
      <div className="add-inventory__header">
        <div className="add-inventory__iconAndTitle">
          <img src={backArrow} alt="" />
          <h1 className="add-inventory__heading">Add New Inventory Item</h1>
        </div>
      </div>
    </div>
  );
}

export default AddInventory;
