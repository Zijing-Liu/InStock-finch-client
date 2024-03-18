import React from 'react'
import InventoryList from "../../component/InventoryList/InventoryList"
import axios from "axios";
import { useState, useEffect } from "react"

export default function Inventory() {
const baseURL = process.env.REACT_APP_BASE_URL
const [inventoryData, setInventoryData] = useState(null);
const [warehouseData, setWarehouseData] = useState(null);


useEffect(() => {
  const inventoryData = async() => {
    try{
      const data = await axios.get(`${baseURL}inventories`)
      setInventoryData(data.data)
    }catch(error){
      console.log("Inventory list data error:", error);
    }
  };

   const warehouseData = async() => {
      try{
        const data = await axios.get(`${baseURL}warehouses`)
        setWarehouseData(data.data)
      }catch(error){
        console.log("warehouseList data error")
      }
    }
  
    inventoryData();
    warehouseData();
  }, []);



if (!inventoryData || !warehouseData) {
  return <div>loading...</div>;
}

return (
  <div className='list'>
      <InventoryList inventoryData={inventoryData} setInventoryData={setInventoryData}  warehouseData={warehouseData}/>
    </div>
);
}