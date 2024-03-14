import React, { useEffect } from "react";
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

  useEffect(() => {
    const getItemDetails = async () => {
      const response = await axios.get(`${base_url}/inventories/1`);
      console.log(response);
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
          <h1>Television</h1>
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
          <p className="inventory-item__text">
            This 50", 4K LED TV provides a crystal-clear picture and vivid
            colors.
          </p>
          <h4 className="inventory-item__label">CATEGORY:</h4>
          <p className="inventory-item__text">Electronics</p>
        </div>
        <div className="inventory-item__body-right">
          <div className="inventory-item__status-and-quantity">
            <div>
              <h4 className="inventory-item__label">STATUS:</h4>
              <p className="inventory-item__text--status">IN STOCK:</p>
            </div>
            <span>
              <h4 className="inventory-item__label">Quantity:</h4>
              <p className="inventory-item__text">500</p>
            </span>
          </div>
          <h4 className="inventory-item__label">Warehouse:</h4>
          <p className="inventory-item__text">Manhattan</p>
        </div>
      </div>
    </article>
  );
}

export default InventoryItemDetail;
