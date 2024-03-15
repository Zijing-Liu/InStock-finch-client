import React from 'react'
import "./InventoryList.scss";
import searchLogo from "../../assets/Icons/search-24px.svg";
//import sort from "../../assets/Icons/sort-24px.svg"
//import { useState } from "react";
//import WarehouseCard from "../WarehouseCard/WarehouseCard";


function Inventory({inventoryData}) {

    const inventortyObj = {
        title: "Inventory",
        button: "+ Add New Item",
    }


    return (
        <section>
            <div className="list">
                <div className="list__main-container">
                    <h1>{inventoryObj.title}</h1>
                    <div className="list__search-container">
                        <input className="list__search" type="text" name="search-bar" placeholder="Search..."></input>
                        <button className="list__search-btn">
                            <img src={searchLogo} className="list__search-img" />
                        </button>
                    </div>
                    <button className="list__btn">{inventoryObj.button}</button>
                </div>

        {/* {warehouseData.map((warehouse) => {
            return(
                <WarehouseCard 
                warehouse={warehouse}
                
                key={warehouse.id}
                />
            )} */}
                {/* )} */}
            </div>
        </section>
    )
}

export default Inventory;