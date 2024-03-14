import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIconWhite from "../../assets/Icons/edit-24px-white.svg";
import axios from "axios";

import "./InventoryItemDetail.scss";
function InventoryItemDetail() {
  // get the data from api
  const base_url = process.env.REACT_APP_BASE_URL;
  const { ID } = useParams();
  // const id = 1;
  const navigator = useNavigate();
  const [itemData, setItemData] = useState({});
  useEffect(() => {
    const getItemDetails = async () => {
      try {
        const response = await axios.get(`${base_url}inventories/${ID}`);
        // setLoaded(true);
        const itemDeatil = response.data;
        setItemData(itemDeatil);
      } catch (error) {
        console.log(
          "there is a problem fetch the inventory item details",
          error
        );
      }
    };
    // TODO: get warehouse name from API
    // const getWareHouseID = async () => {
    //   const response = await axios.get(`${base_url}warehouses/${warehouseID}`);
    //   setWarehouse(response.data.warehouse_name);
    // };
    getItemDetails();
    // getWareHouseID;
  }, [ID]);

  return (
    <article className="inventory-item">
      <div className="inventory-item__header">
        <div className="inventory-item__iconAndTitle">
          <img
            className="icon"
            src={arrowBackIcon}
            alt="Back Arrow Icon"
            onClick={() => {
              navigator("/inventory");
            }}
          />
          <h1>{itemData.item_name}</h1>
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
          <p className="inventory-item__text"> {itemData.description}</p>
          <h4 className="inventory-item__label">CATEGORY:</h4>
          <p className="inventory-item__text">{itemData.category}</p>
        </div>
        <div className="inventory-item__body-right">
          <div className="inventory-item__status-and-quantity">
            <div>
              <h4 className="inventory-item__label">STATUS:</h4>
              <p className="inventory-item__status">{itemData.status}</p>
            </div>
            <span>
              <h4 className="inventory-item__label">Quantity:</h4>
              <p className="inventory-item__text">{itemData.quantity}</p>
            </span>
          </div>
          <h4 className="inventory-item__label">Warehouse:</h4>
          <p className="inventory-item__text">{itemData.warehouse_id}</p>
        </div>
      </div>
    </article>
  );
}

export default InventoryItemDetail;
