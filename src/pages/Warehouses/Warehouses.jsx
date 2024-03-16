import React from 'react'
import WarehouseList from "../../component/WarehouseList/WarehouseList"
import axios from "axios";
import { useState, useEffect } from "react"

export default function Warehouses() {
const baseURL = process.env.REACT_APP_BASE_URL
const [warehouseData, setWarehouseData] = useState(null)

useEffect(() => {
  const warehouseData = async() => {
    try{
      const data = await axios.get(`${baseURL}warehouses`)
      setWarehouseData(data.data)
    }catch(error){
      console.log("warehouseList data error")
    }
  }
  warehouseData();
}, [])

if (!warehouseData) {
  return(
    <div>loading...</div>
  )
}

  return (
    <div className='list'>
      <WarehouseList warehouseData={warehouseData}/>
    </div>
  )
}