import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import arrow_back from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";

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
          src={arrow_back}
          alt="Back Arrow Icon"
          // onClick={}
        />

        <h2>Television</h2>
        <img src="./" alt="" />
      </div>
      <div className="inventory-item__body">
        <p>ITEM DESCRIPTION:</p>
        <p>CATEGORY:</p>
        <div></div>
        <div>
          <p>STATUS:</p>
          <p>IN STOCK:</p>
        </div>
        <span>
          <p>Quantity:</p>
        </span>
        <p>Quantity:</p>
      </div>
      <div>Warehouse:</div>
    </article>
  );
}

export default InventoryItemDetail;
