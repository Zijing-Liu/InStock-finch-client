import "./WarehouseList.scss";
import searchLogo from "../../assets/Icons/search-24px.svg";
import sort from "../../assets/Icons/sort-24px.svg"
import WarehouseCard from "../WarehouseCard/WarehouseCard";

function WarehouseList({warehouseData}) {

    const warehouseObj = {
        title: "Warehouses",
        button: "+ Add New Warehouse",
    }

    return (
        <section>
                <div className="list__main-container">
                    <h1 className="list__title-text">{warehouseObj.title}</h1>
                    <div className="list__search-container">
                        <input className="list__search" type="text" name="search-bar" placeholder="Search..."></input>
                        <button className="list__search-btn">
                            <img src={searchLogo} className="list__search-img" alt="sort"/>
                        </button>
                    </div>
                    <button className="list__btn">{warehouseObj.button}</button>
                </div>

                <div className="list__header">
                <div className="list__icons list__warehouse">
                    <h2 className="list__table-header">Warehouse</h2> <img src={sort} alt="sort" />
                </div>
                <div className="list__icons list__address">
                    <h2 className="list__table-header">Address</h2> <img src={sort} alt="sort" />
                </div>
                <div className="list__icons list__name">
                    <h2 className="list__table-header">Contact Name</h2> <img src={sort} alt="sort" />
                </div>
                <div className="list__icons list__info">
                    <h2 className="list__table-header">Contact Information</h2> <img src={sort} alt="sort" />
                </div>
                <h2 className="list__table-header list__action">Actions</h2>
            </div>

        {warehouseData.map((warehouse) => {
            return(
                <WarehouseCard 
                warehouse={warehouse}
                key={warehouse.id}
                />
            )}
                )}
        </section>
    )
}

export default WarehouseList;