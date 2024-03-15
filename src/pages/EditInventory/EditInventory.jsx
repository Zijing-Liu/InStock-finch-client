import React, { useState, useEffect } from "react";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import "./EditInventory.scss";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import InventoryForm from "../../component/InventoryForm/InventoryForm";

function EditInventory() {
  const { ID } = useParams();
  const base_url = process.env.REACT_APP_BASE_URL;

  // Go back to the previous page when clicking the back arrow
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const [itemDetails, setItemDetails] = useState({}); //to save the updated data
  const [error, setError] = useState({});
  const [warehouse, setWarehouse] = useState({});

  useEffect(() => {
    const getItemDetails = async () => {
      try {
        // get the item details from api
        const response = await axios.get(`${base_url}inventories/${ID}`);
        const itemDetail = response.data;
        setItemDetails(itemDetail);
        // get the warehouse name the item is located at from api
        if (!itemDetail.warehouse_id) {
          throw Error("unable to get warehouse id");
        } else {
          const warehouse = await axios.get(
            `${base_url}warehouses/${itemDetail.warehouse_id}`
          );
          setWarehouse(warehouse.data);
        }
      } catch (error) {
        console.log(
          "there is a problem fetch the inventory item details",
          error
        );
      }
    };
    getItemDetails();
  }, [ID]);

  if (!itemDetails) {
    return <div>loading...</div>;
  }

  // check form validation
  const isFormValid = () => {
    let isValid = true;
    const errors = {};

    if (itemDetails.item_name.length < 2) {
      errors.item_name = "This field is required";
      isValid = false;
    }
    if (itemDetails.description.length < 2) {
      errors.description = "This field is required";
      isValid = false;
    }
    if (itemDetails.quantity < 0 || itemDetails.quantity === "") {
      errors.quantity = "Invalid input";
      isValid = false;
    }
    if (itemDetails.quantity === 0 && itemDetails.status === "In Stock") {
      errors.quantity = "The quantity can not be 0 while status in stock!";
      isValid = false;
    }
    // Update the error state
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
    };

    //update data
    try {
      const response = await axios.patch(
        `${base_url}inventories/${ID}`,
        dataTosend
      );
      // Return the response data
      return response.data;
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  // to handle form cancel
  const handleOnClick = (event) => {
    event.preventDefault();
    setItemDetails(setItemDetails);
    setError({});
  };

  return (
    <div className="edit">
      <div className="edit__title-box">
        <img
          className="edit__image"
          src={arrowIcon}
          alt="arrow-icon"
          onClick={handleGoBack}
        />
        <h2 class="edit__title">Edit Inventory Item</h2>
      </div>
      <hr />
      <InventoryForm
        //  itemDetails={itemDetails}
        setItemDetails={setItemDetails}
        setFormData={setItemDetails}
        Currentwarehouse={warehouse}
        itemDetails={itemDetails}
        handleOnClick={handleOnClick}
        handleOnSubmit={handleOnSubmit}
        error={error}
        setError={setError}
      />
    </div>
  );
}

export default EditInventory;
