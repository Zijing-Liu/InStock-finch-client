import React, { useState } from "react";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import "./EditInventory.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import InventoryForm from "../../component/InventoryForm/InventoryForm";

function EditInventory() {
  const { ID } = useParams();

  // mock data to test

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

  const [getFormValidation, setGetFormValidation] = useState(true);
  const [submitChange, setSubmitChange] = useState(false);

  const [error, setError] = useState({});

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    // console.log('i am clicked');

    // to make the function works in the use effect
    setSubmitChange(!submitChange);

    if (!getFormValidation) {
      console.log("this should not work ");
    }

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
      <InventoryForm
        setFormData={setFormData}
        formData={formData}
        handleOnClick={handleOnClick}
        handleOnSubmit={handleOnSubmit}
        submitChange={submitChange}
        setGetFormValidation={setGetFormValidation}
        getFormValidation={getFormValidation}
        error={error}
        setError={setError}
      />
    </div>
  );
}

export default EditInventory;
