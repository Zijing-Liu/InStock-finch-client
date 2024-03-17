import React, { useState, useEffect } from "react";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import "./AddInventory.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InventoryForm from "../../component/InventoryForm/InventoryForm";

function AddInventory() {
  const base_url = process.env.REACT_APP_BASE_URL;
  // Go back to the previous page when clicking the back arrow
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const [itemDetails, setItemDetails] = useState({ quantity: 0 }); //to save the added data
  const [error, setError] = useState({});

  if (!itemDetails) {
    return <div>loading...</div>;
  }

  // check form validation
  const isFormValid = () => {
    let isValid = true;
    const errors = {};

    if (!itemDetails.item_name || itemDetails.item_name.length < 2) {
      errors.item_name =
        "This field is required, and please enter a name with more than 2 charactors";
      isValid = false;
    }
    if (!itemDetails.description || itemDetails.description.length < 2) {
      errors.description =
        "This field is required, and please enter a name with more than 2 charactors";
      isValid = false;
    }

    if (
      !itemDetails.warehouse_id ||
      itemDetails.warehouse_id === undefined ||
      !itemDetails.warehouse_name ||
      itemDetails.warehouse_name === "" ||
      itemDetails.warehouse_name === undefined
    ) {
      errors.warehouse_id = "This field is required";
      isValid = false;
    }
    if (!itemDetails.category) {
      errors.category = "This field is required";
      isValid = false;
    }
    if (
      !itemDetails.quantity ||
      itemDetails.quantity < 0 ||
      itemDetails.quantity === ""
    ) {
      errors.quantity = "Invalid input";
      isValid = false;
    }
    // Update the error state
    if (itemDetails.status === "" || itemDetails.status === undefined) {
      errors.status = "This field is required";
      isValid = false;
    }

    if (itemDetails.quantity === 0 && itemDetails.status === "In Stock") {
      errors.quantity = "The quantity can not be 0 while status in stock!";
      isValid = false;
    }
    setError(errors);

    return isValid;
  };

  // handle updating data when save btn clicked
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    isFormValid();

    // create new obj to send because the create, update time should not be send
    const dataTosend = {
      category: itemDetails.category,
      description: itemDetails.description,
      item_name: itemDetails.item_name,
      quantity: Number(itemDetails.quantity),
      status: itemDetails.status,
      warehouse_id: itemDetails.warehouse_id,
      warehouse_name: itemDetails.warehouse_name,
    };
    //update data
    try {
      const response = await axios.post(`${base_url}inventories`, dataTosend);
      // navigate to the previous page
      navigate(`/inventory`);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  // to handle form cancel
  const handleOnClick = (event) => {
    event.preventDefault();
    setItemDetails(setItemDetails);
    setError({});
    // navigate to the previous page when cancel
    navigate(`/inventory`);
  };
  return (
    <div className="add-inventory">
      <div className="add-inventory__title-box">
        <img
          className="add-inventory__image"
          src={arrowIcon}
          alt="arrow-icon"
          onClick={handleGoBack}
        />
        <h1 className="add-inventory__title">Add Inventory Item</h1>
      </div>
      <hr />
      <InventoryForm
        setItemDetails={setItemDetails}
        setFormData={setItemDetails}
        itemDetails={itemDetails}
        handleOnClick={handleOnClick}
        handleOnSubmit={handleOnSubmit}
        error={error}
        setError={setError}
        Currentwarehouse={""}
        showPlaceHolder={true}
        buttonText={"+ Add"}
      />
    </div>
  );
}

export default AddInventory;
