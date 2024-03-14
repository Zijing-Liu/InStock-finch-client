import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIconWhite from "../../assets/Icons/edit-24px-white.svg";
import axios from "axios";

import "./InventoryItemDetail.scss";
function InventoryItemDetail() {
  // get the data from api
  const base_url = process.env.REACT_APP_BASE_URL;
  console.log(base_url);
  // the inventory id param will be obtained once the inventory list are mapped out
  // const {ID} = useParams();
  const navigator = useNavigate();
  // set up the states
  // states for all item detail variables
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const [warehouse, setWarehouse] = useState("");
  useEffect(() => {
    const getItemDetails = async () => {
      const response = await axios.get(`${base_url}inventories/1`);
      const itemData = response.data;
      console.log(itemData);
    };
    getItemDetails();
  }, []);
  return (
    <article className="inventory-item">
      <div className="inventory-item__header">
        <div className="inventory-item__iconAndTitle">
          <img
            className="icon"
            src={arrowBackIcon}
            alt="Back Arrow Icon"
            onClick={navigator("/inventory")}
          />
          <h1>{itemName}</h1>
        </div>
        <button className="inventory-item__edit">
          <p className="inventory-item__edit-text">Edit</p>
          <img
            className="inventory-item__edit-icon"
            src={editIconWhite}
            alt="Edit Icon"
          />
        </button>
      </div>
      <div className="inventory-item__body">
        <div className="inventory-item__body-left">
          <h4 className="inventory-item__label">ITEM DESCRIPTION:</h4>
          <p className="inventory-item__text"> {description}</p>
          <h4 className="inventory-item__label">CATEGORY:</h4>
          <p className="inventory-item__text">{category}</p>
        </div>
        <div className="inventory-item__body-right">
          <div className="inventory-item__status-and-quantity">
            <div>
              <h4 className="inventory-item__label">STATUS:</h4>
              <p className="inventory-item__text--status">{status}</p>
            </div>
            <span>
              <h4 className="inventory-item__label">Quantity:</h4>
              <p className="inventory-item__text">{quantity}</p>
            </span>
          </div>
          <h4 className="inventory-item__label">Warehouse:</h4>
          <p className="inventory-item__text">{warehouse}</p>
        </div>
      </div>
    </article>
  );
}

export default InventoryItemDetail;
