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
      const data = await axios.get(`${baseURL}warehouses`)
      setInventoryData(data.data)
    }catch(error){
      console.log("inventory list data error")
    }
  }
  warehouseData();
}, []);


if (!warehouseData) {
  return <div>loading...</div>;
}

return (
  <div>
    <div>Warehouses</div>
    <div>
      <WarehouseList warehouseData={warehouseData} />
    </div>
  </div>
);
}