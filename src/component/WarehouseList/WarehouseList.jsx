import "./WarehouseList.scss";
import searchLogo from "../../assets/Icons/search-24px.svg";
import { useState } from "react";
import DeleteWarehouse from "../DeleteWarehouse/DeleteWarehouse";
import WarehouseCard from "../WarehouseCard/WarehouseCard";
import sort from "../../assets/Icons/sort-24px.svg";


function WarehouseList({warehouseData, setDeleteWarehouse}) {
    const [isDeleteWarehouseOpen, setDeleteWarehouseOpen] = useState(false)
    const [deleteWarehouseId, setDeleteWarehouseId] = useState(null)


    const warehouseObj = {
        title: "Warehouses",
        button: "+ Add New Warehouse",
    }


    return (
        <section>
            {isDeleteWarehouseOpen && <DeleteWarehouse setDeleteWarehouseOpen={setDeleteWarehouseOpen} warehouseData={warehouseData} deleteWarehouseId={deleteWarehouseId} setDeleteWarehouse={setDeleteWarehouse}/>}
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
                    <h2>Warehouse</h2> <img src={sort} />
                </div>
                <div className="list__icons list__address">
                    <h2>Address</h2> <img src={sort} />
                </div>
                <div className="list__icons list__name">
                    <h2>Contact Name</h2> <img src={sort} />
                </div>
                <div className="list__icons list__info">
                    <h2>Contact Information</h2> <img src={sort} />
                </div>
                <h2 className="list__action">Actions</h2>
            </div>

        {warehouseData.map((warehouse) => {
            return(
                <WarehouseCard 
                warehouse={warehouse}
                setDeleteWarehouseOpen={setDeleteWarehouseOpen}
                setDeleteWarehouseId = {setDeleteWarehouseId}
                key={warehouse.id}
                />
            )}
                )}
            </div>
        </section>
    )
}

export default WarehouseList;