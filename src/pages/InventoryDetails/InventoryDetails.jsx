import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIconWhite from "../../assets/Icons/edit-24px-white.svg";
import axios from "axios";

import "./InventoryDetails.scss";
function InventoryItemDetail() {
  // get the data from api
  const base_url = process.env.REACT_APP_BASE_URL;
  const { ID } = useParams();
  const navigator = useNavigate();
  const [itemData, setItemData] = useState({});
  const [warehouseName, setWarehouseName] = useState("");
  useEffect(() => {
    const getItemDetails = async () => {
      try {
        // get the item details from api
        const response = await axios.get(`${base_url}inventories/${ID}`);
        const itemDetail = response.data;
        setItemData(itemDetail);
        // get the warehouse name the item is located at from api
        if (!itemDetail.warehouse_id) {
          throw Error("unable to get warehouse id");
        } else {
          const warehouse = await axios.get(
            `${base_url}warehouses/${itemDetail.warehouse_id}`
          );
          console.log(warehouse.data);
          setWarehouseName(warehouse.data.warehouse_name);
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
          <h1 className="inventory-item__heading">{itemData.item_name}</h1>
        </div>
        <Link
          to={`/inventory/edit/${ID}`}
          className="inventory-item__link"
          itemData={itemData}
        >
          <button className="inventory-item__edit">
            <p className="inventory-item__edit-text">Edit</p>
            <img
              className="inventory-item__edit-icon"
              src={editIconWhite}
              alt="Edit Icon"
            />
          </button>
        </Link>
      </div>
      <div className="inventory-item__body">
        <div className="inventory-item__body-left">
          <h4 className="inventory-item__label">ITEM DESCRIPTION:</h4>
          <p className="inventory-item__text">{itemData.description}</p>
          <h4 className="inventory-item__label">CATEGORY:</h4>
          <p className="inventory-item__text">{itemData.category}</p>
        </div>
        <div className="inventory-item__body-right">
          <div className="inventory-item__status-and-quantity">
            <div>
              <h4 className="inventory-item__label">STATUS:</h4>
              <p className="inventory-item__status">
                {!itemData.status
                  ? itemData.status
                  : itemData.status.toUpperCase()}
              </p>
            </div>
            <span>
              <h4 className="inventory-item__label">QUANTITY:</h4>
              <p className="inventory-item__text">{itemData.quantity}</p>
            </span>
          </div>
          <h4 className="inventory-item__label">WAREHOUSE:</h4>
          <p className="inventory-item__text">{warehouseName}</p>
        </div>
      </div>
    </article>
  );
}

export default InventoryItemDetail;
