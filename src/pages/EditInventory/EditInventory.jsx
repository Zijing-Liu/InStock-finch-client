import React, { useState } from "react";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import "./EditInventory.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditInventory() {
  const { ID } = useParams();

  // mock data to test
  const Warehouses = ["Manhattan", "Washington", "San Francisco"];
  const categories = [
    "Apparel",
    "Accessories",
    "Electronics",
    "Electronics",
    "Gear",
    "Health",
  ];
  const initalInventory = {
    id: 1,
    warehouse_id: 2,
    item_name: "Television",
    description:
      'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
    category: "Electronics",
    status: "In Stock",
    quantity: 500,
  };

  const [formData, setFormData] = useState(initalInventory);
  const [error, setError] = useState({});

  // handle inputs change
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // If status is "Out Of Stock", set quantity to 0
    if (name === "status" && value === "Out Of Stock") {
      setFormData({
        ...formData,
        quantity: 0,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
console.log(formData)
  // check form validation
  const isFormValid = () => {
    let isValid = true;

    const errors = {};

    if (formData.item_name.length < 2) {
      errors.item_name = "This field is required";
      isValid = false;
    }
    if (formData.description.length < 2) {
      errors.description = "This field is required";
      isValid = false;
    }
    if (formData.quantity < 0) {
      errors.quantity = "Invalid input";
      isValid = false;
    }
    // Update the error state
    setError(errors);

    return isValid;
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    // check validation
    isFormValid();

    // update data
    // try {
    //   const response = await axios.put(
    //     `${process.env.REACT_APP_BASE_URL}inventory/edit/${id}`,
    //     formData
    //   );
    //   // Return the response data
    //   return response.data;
    // } catch (error) {
    //   console.error("Error updating data:", error);
    // }
  };

  // to handle form cancel
  const handleOnClick = (event) => {
    event.preventDefault();
    setFormData(initalInventory);
    setError({});
  };

  return (
    <div className="edit">
      <div className="edit__title-box">
        <img className="edit__image" src={arrowIcon} alt="arrow-icon" />
        <h2>Edit Inventory Item</h2>
      </div>
      <hr />

      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form__container">
          <div className="form__box">
            <h3 className="form__title">Item Details</h3>

            <label htmlFor="name" className="form__label">
              Item Name
            </label>
            <input
              className="form__input"
              type="text"
              placeholder={formData.item_name}
              id="name"
              name="item_name"
              value={formData.item_name}
              onChange={handleInputChange}
            />
            {error.item_name && (
              <p className="form__input--error">{error.item_name}</p>
            )}

            <label htmlFor="description" className="form__label">
              Description
            </label>
            <textarea
              className={
                error.description
                  ? ` form__input form__input--text form__input--red`
                  : `form__input form__input--text`
              }
              placeholder={formData.description}
              id="description"
              name="description"
              rows=""
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            {error.description && (
              <p className="form__input--error">{error.description}</p>
            )}

            <label htmlFor="category" className="form__label">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="form__input form__input--select"
              value={formData.category}
              onChange={handleInputChange}
            >
              {categories.map((category, i) => (
                <option key={i} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <hr />

          <div className="form__box">
            <h3 className="form__title">Item Availability</h3>
            <label htmlFor="status" className="form__label">
              Status
            </label>
            <div className="form__status">
              <div className={formData.status === "In Stock" ? "form__check form__check--checked" : "form__check" }>
                <input
                  type="radio"
                  id="in-stock"
                  name="status"
                  value="In Stock"
                  checked={formData.status === "In Stock"}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="in-stock"
                  className="form__label form__label--stock"
                >
                  In Stock
                </label>
              </div>

              <div className={formData.status === "Out Of Stock" ? "form__check form__check--checked" : "form__check" }>
                <input
                  type="radio"
                  id="out-of-stock"
                  name="status"
                  value="Out Of Stock"
                  checked={formData.status === "Out Of Stock"}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="out-of-stock"
                  className="form__label form__label--stock"
                >
                  Out Of Stock
                </label>
              </div>
            </div>
            {formData.status === "In Stock" && (
              <>
                <label htmlFor="quantity" className="form__label">
                  Quantity
                </label>
                <input
                  className={
                    error.quantity
                      ? "form__input form__input--red"
                      : "form__input"
                  }
                  type="number"
                  placeholder={formData.quantity}
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                />
                {error.quantity && (
                  <p className="form__input--error">{error.quantity}</p>
                )}
              </>
            )}

            <label htmlFor="warehouse" className="form__label">
              Warehouse
            </label>
            <select
              id="warehouse"
              name="warehouse_id"
              className="form__input form__input--select"
              value={formData.warehouse_id}
              onChange={handleInputChange}
            >
              {Warehouses.map((warehouse, i) => (
                <option key={i} value={warehouse}>
                  {warehouse}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form__btn-box">
          <button
            type="button"
            className="form__btn form__btn--white"
            onClick={handleOnClick}
          >
            Cancel
          </button>
          <button type="submit" className="form__btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditInventory;
