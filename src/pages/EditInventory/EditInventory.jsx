import React from "react";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import "./EditInventory.scss";

function EditInventory() {
  const Warehouses = ["Manhattan", "Washingon", "San Fran"];
  const categories = [
    "Apparel",
    "Accessories",
    "Electronics",
    "Electronics",
    "Gear",
    "Health",
  ];
  return (
    <>
      <main>
        <div className="edit-title__box">
          <img src={arrowIcon} alt="arrow-icon" />
          <h1>Edit Inventory Item</h1>
          <hr></hr>
        </div>

        <form className="form">
          <div className="form__contianer">
            <div className="form__box">
              <h2 className="form__title">Item Details</h2>

              <label htmlFor="name">Item Name</label>
              <input
                type="text"
                placeholder="Item Name"
                id="name"
                name="name"
              ></input>

              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors.'
                id="description"
                name="description"
                row="4"
              ></textarea>

              <label htmlFor="category">Category</label>
              <select id="category" name="category">
                {categories.map((category) => {
                  return (
                    <>
                      <option value={category}>{category}</option>
                    </>
                  );
                })}
              </select>

              <hr></hr>
            </div>

            <div className="form__box">
              <h2 className="form__title">Item Availability</h2>
              <label htmlFor="status">Status</label>

              <input
                type="radio"
                id="in-stock"
                name="status"
                value="in-stock"
              ></input>
              <label htmlFor="in-stock">In Stock</label>

              <input
                type="radio"
                id="out-of-stock"
                name="status"
                value="out-of-stock"
              ></input>
              <label htmlFor="out-of-stock">Out Of Stock</label>

              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                placeholder="Quantity"
                id="quantity"
                name="quantity"
              ></input>

              <label htmlFor="warehouse">Warehouse</label>
              <select id="warehouse" name="warehouse">
                {Warehouses.map((warehouse) => {
                  return (
                    <>
                      <option value={warehouse}>{warehouse}</option>
                    </>
                  );
                })}
              </select>
            </div>

            <div className="form__btn-box">
              <button type="submit">Save</button>
              <button>Cancel</button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default EditInventory;
