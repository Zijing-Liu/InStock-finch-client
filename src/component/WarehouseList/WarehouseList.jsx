import "./WarehouseList.scss";
import searchLogo from "../../assets/Icons/search-24px.svg";
import { Link } from "react-router-dom";
import WarehouseCard from "../WarehouseCard/WarehouseCard";
import sort from "../../assets/Icons/sort-24px.svg";

function WarehouseList({warehouseData, setWarehouseData}) {


    const warehouseObj = {
        title: "Warehouses",
        button: "+ Add New Warehouse",
    }

    return (
        <section>
            <div className="ware-list">
                <div className="ware-list__main-container">
                    <h1 className="ware-list__title">{warehouseObj.title}</h1>
                    <div className="ware-list__search-container">
                        <input className="ware-list__search" type="text" name="search-bar" placeholder="Search..."></input>
                        <button className="ware-list__search-btn">
                            <img src={searchLogo} className="ware-list__search-img" />
                        </button>
                    </div>
                    <Link to="/warehouses/add">
                    <button className="ware-list__btn">{warehouseObj.button}</button>
                    </Link>
                </div>

                <div className="ware-list__header">
                <div className="ware-list__icons ware-list__warehouse">
                    <h2 className="ware-list__table-header">Warehouse</h2> <img src={sort} />
                </div>
                <div className="ware-list__icons ware-list__address">
                    <h2 className="ware-list__table-header">Address</h2> <img src={sort} />
                </div>
                <div className="ware-list__icons ware-list__name">
                    <h2 className="ware-list__table-header">Contact Name</h2> <img src={sort} />
                </div>
                <div className="ware-list__icons ware-list__info">
                    <h2 className="ware-list__table-header">Contact Information</h2> <img src={sort} />
                </div>
                <h2 className="ware-list__table-header ware-list__action">Actions</h2>
            </div>

        {warehouseData.map((warehouse, index) => {
            return(
                <WarehouseCard 
                warehouse={warehouse}
                key={warehouse.id}
                index={index}
                setWarehouseData={setWarehouseData}
                warehouseData={warehouseData}
                />
            )}
                )}
            </div>
        </section>
    )
}

export default WarehouseList;