import React from "react";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import "./EditInventory.scss";


function EditInventory() {
  const Warehouses = ["Manhattan", "Washingon", "San Fran"];
  const categories = ["Apparel",
    "Accessories",
    "Electronics",
    "Electronics",
    "Gear",
    "Health",
  ];
  return (
    <>
      <main className="edit">
        <div className="edit__title-box">
          <img className="edit__image" src={arrowIcon} alt="arrow-icon" />
          <h2>Edit Inventory Item</h2>
        </div>
        <hr></hr>

        <form className="form">
          <div className="form__contianer">
            <div className="form__box">
              <h3 className="form__title">Item Details</h3>

              <label htmlFor="name">Item Name</label>
              <input className="form__input"
                type="text"
                placeholder="Item Name"
                id="name"
                name="name"
              ></input>

              <label htmlFor="description">Description</label>
              <textarea
              className="form__input form__input--text"
                type="text"
                placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors.'
                id="description"
                name="description"
                row="4"
              ></textarea>

              <label htmlFor="category">Category</label>
              <select id="category" name="category" className="form__input form__input--select">
 
                {categories.map((category) => {
                  return (
                    <>
                      <option value={category}>{category}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <hr></hr>
            <div className="form__box">
              <h3 className="form__title">Item Availability</h3>
              <label htmlFor="status">Status</label>
              <div>
                <input
                className="form__input"
                  type="radio"
                  id="in-stock"
                  name="status"
                  value="in-stock"
                ></input>
                <label htmlFor="in-stock">In Stock</label>
              </div>

              <div>
                <input
                className="form__input"
                  type="radio"
                  id="out-of-stock"
                  name="status"
                  value="out-of-stock"
                ></input>
                <label htmlFor="out-of-stock">Out Of Stock</label>
              </div>

              <label htmlFor="quantity">Quantity</label>
              <input
              className="form__input"
                type="number"
                placeholder="Quantity"
                id="quantity"
                name="quantity"
              ></input>

              <label htmlFor="warehouse">Warehouse</label>
              <select id="warehouse" name="warehouse" className="form__input form__input--select">
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
