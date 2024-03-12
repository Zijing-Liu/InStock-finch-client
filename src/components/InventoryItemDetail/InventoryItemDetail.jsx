import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px/svg";
import axios from "axios";
import "./InventoryItemDetail.scss";
function InventoryItemDetail() {
  // get the data from api
  const base_url = process.env.REACT_APP_BASE_URL;
  const inventoryItemID = useParams();
  // const navigator = useNavigate();
  const getItemDetails = async () => {
    const response = await axios.get(`${base_url}/${inventoryItemID}`);
    console.log();
    return;
  };
  useEffect(() => {});
  return (
    <article className="inventory-item">
      <div className="inventory-item__header">
        <img
          src={arrowBackIcon}
          alt="Back Arrow Icon"
          // onClick={}
        />

        <h2>Television</h2>
        <img src={edit - icon} alt="" />
      </div>
      <div className="inventory-item__body">
        <h3 className="inventory-item__label">ITEM DESCRIPTION:</h3>
        <p className="inventory-item__text">
          This 50", 4K LED TV provides a crystal-clear picture and vivid colors.
        </p>

        <h3 className="inventory-item__label">CATEGORY:</h3>
        <p className="inventory-item__text">Electronics</p>

        <div className="inventory-item__status-and-quantity">
          <div>
            <h3 className="inventory-item__label">STATUS:</h3>
            <p className="inventory-item__text--status">IN STOCK:</p>
          </div>
          <span>
            <h3 className="inventory-item__label">Quantity:</h3>
            <p className="inventory-item__text"></p>
          </span>
        </div>
      </div>
      <div>
        <h3 className="inventory-item__label">Warehouse:</h3>
        <p className="inventory-item__text">Manhattan</p>
      </div>
    </article>
  );
}

export default InventoryItemDetail;
