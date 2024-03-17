import "./WarehouseList.scss";
import searchLogo from "../../assets/Icons/search-24px.svg";
import { useState } from "react";
import WarehouseCard from "../WarehouseCard/WarehouseCard";
import sort from "../../assets/Icons/sort-24px.svg";


function WarehouseList({warehouseData, }) {

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

                <div className="list__header">
                <div className="list__icons list__warehouse">
                    <h2 className="list__table-header">Warehouse</h2> <img src={sort} />
                </div>
                <div className="list__icons list__address">
                    <h2 className="list__table-header">Address</h2> <img src={sort} />
                </div>
                <div className="list__icons list__name">
                    <h2 className="list__table-header">Contact Name</h2> <img src={sort} />
                </div>
                <div className="list__icons list__info">
                    <h2 className="list__table-header">Contact Information</h2> <img src={sort} />
                </div>
                <h2 className="list__table-header list__action">Actions</h2>
            </div>

        {warehouseData.map((warehouse, index) => {
            return(
                <WarehouseCard 
                warehouse={warehouse}
                key={warehouse.id}
                index={index}
                />
            )}
                )}
            </div>
        </section>
    )
}

export default WarehouseList;