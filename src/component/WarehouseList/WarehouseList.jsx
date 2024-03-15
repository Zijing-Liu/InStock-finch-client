import "./WarehouseList.scss";
import searchLogo from "../../assets/Icons/search-24px.svg";
import sort from "../../assets/Icons/sort-24px.svg"
import { useState } from "react";
// import { useParams } from "react-router-dom";
import WarehouseCard from "../WarehouseCard/WarehouseCard";


function WarehouseList({warehouseData}) {

    const warehouseObj = {
        title: "Warehouses",
        button: "+ Add New Warehouse",
    }


    return (
        <section>
            <div className="list">
                <div className="list__main-container">
                    <h1>{warehouseObj.title}</h1>
                    <div className="list__search-container">
                        <input className="list__search" type="text" name="search-bar" placeholder="Search..."></input>
                        <button className="list__search-btn">
                            <img src={searchLogo} className="list__search-img" />
                        </button>
                    </div>
                    <button className="list__btn">{warehouseObj.button}</button>
                </div>

        {warehouseData.map((warehouse) => {
            return(
                <WarehouseCard 
                warehouse={warehouse}
                // setDeleteWarehouseOpen={setDeleteWarehouseOpen}
                // setDeleteWarehouseId = {setDeleteWarehouseId}
                key={warehouse.id}
                />
            )}
                )}
            </div>
        </section>
    )
}

export default WarehouseList;