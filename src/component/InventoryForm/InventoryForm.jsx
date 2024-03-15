import "./InventoryForm.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function InventoryForm({
  handleOnSubmit,
  itemDetails,
  handleOnClick,
  error,
  Currentwarehouse,
  setItemDetails,
}) {
  const base_url = process.env.REACT_APP_BASE_URL;
  const [Warehouses, setWareHouses] = useState();

  const categories = [
    "Apparel",
    "Accessories",
    "Electronics",
    "Electronics",
    "Gear",
    "Health",
  ];

  useEffect(() => {
    const getWareHouses = async () => {
      try {
        // get all warehouses from api
        const warehouses = await axios.get(`${base_url}warehouses`);
        setWareHouses(warehouses.data);
        console.log("here is all current warehouses");
      } catch (error) {
        console.log("there is a problem fetch the warehouses", error);
      }
    };
    getWareHouses();
  }, []);

  if (!Warehouses) {
    return <div>Loading...</div>;
  }

  // handle inputs change
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // If status is "Out Of Stock", set quantity to 0
    if (name === "status" && value === "Out Of Stock") {
      setItemDetails({
        ...itemDetails,
        quantity: 0,
        [name]: value,
      });
    }
    // For warehouse selection, find the warehouse object by its name and update the warehouse ID
    else if (name === "warehouse_id") {
      const selectedWarehouse = Warehouses.find(
        (warehouse) => warehouse.warehouse_name === value
      );
      if (selectedWarehouse) {
        setItemDetails({
          ...itemDetails,
          warehouse_id: selectedWarehouse.id,
          warehouse_name: selectedWarehouse.warehouse_name,
        });
      }
    }
    // For other inputs, simply update the state
    else {
      setItemDetails({
        ...itemDetails,
        [name]: value,
      });
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form__container">
          <div className="form__box">
            <h3 className="form__title">Item Details</h3>

            <label htmlFor="name" className="form__label">
              Item Name
            </label>
            <input
              className={
                error.item_name
                  ? ` form__input form__input--red`
                  : `form__input`
              }
              type="text"
              placeholder={itemDetails.item_name}
              id="name"
              name="item_name"
              value={itemDetails.item_name}
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
              placeholder={itemDetails.description}
              id="description"
              name="description"
              rows=""
              value={itemDetails.description}
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
              value={itemDetails.category}
              onChange={handleInputChange}
            >
              {/* Placeholder option */}
              <option value="" className="form__placeholder">
                Please select
              </option>
              {categories.map((category, i) => (
                <option key={i} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {error.item_name && (
              <p className="form__input--error">{error.item_name}</p>
            )}
          </div>

          <hr />

          <div className="form__box">
            <h3 className="form__title">Item Availability</h3>
            <label htmlFor="status" className="form__label">
              Status
            </label>
            <div className="form__status">
              <div
                className={
                  itemDetails.status === "In Stock"
                    ? "form__check form__check--checked"
                    : "form__check"
                }
              >
                <input
                  type="radio"
                  id="in-stock"
                  name="status"
                  value="In Stock"
                  checked={itemDetails.status === "In Stock"}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="in-stock"
                  className="form__label form__label--stock"
                >
                  In Stock
                </label>
              </div>

              <div
                className={
                  itemDetails.status === "Out Of Stock"
                    ? "form__check form__check--checked"
                    : "form__check"
                }
              >
                <input
                  type="radio"
                  id="out-of-stock"
                  name="status"
                  value="Out Of Stock"
                  checked={itemDetails.status === "Out Of Stock"}
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
            {itemDetails.status === "In Stock" && (
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
                  placeholder={itemDetails.quantity}
                  id="quantity"
                  name="quantity"
                  value={itemDetails.quantity}
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
              value={
                itemDetails.warehouse_name
                  ? itemDetails.warehouse_name
                  : Currentwarehouse.warehouse_name
              }
              onChange={handleInputChange}
            >
              <option value="" className="form__placeholder">
                Please select
              </option>
              {Warehouses.map((warehouse) => (
                <option key={warehouse.id} value={warehouse.warehouse_name}>
                  {warehouse.warehouse_name}
                </option>
              ))}
            </select>
            {error.item_name && (
              <p className="form__input--error">{error.item_name}</p>
            )}
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
    </>
  );
}

export default InventoryForm;
