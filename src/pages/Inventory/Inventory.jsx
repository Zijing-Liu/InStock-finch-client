import React from 'react'
import InventoryList from "../../component/InventoryList/InventoryList"
import axios from "axios";
import { useState, useEffect } from "react"

export default function Warehouses() {
const baseURL = process.env.REACT_APP_BASE_URL
const [inventoryData, setInventoryData] = useState(null)

useEffect(() => {
  const inventoryData = async() => {
    try{
      const data = await axios.get(`${baseURL}inventories`)
      setInventoryData(data.data)
    }catch(error){
      console.log("Inventory list data error:", error);
    }
  };
  inventoryData();
}, []);


if (!InventoryData) {
  return <div>loading...</div>;
}

return (
  <div>
    <div>Inventory</div>
    <div>
      <InventoryList inventoryData={inventoryData} />
    </div>
  </div>
);
}