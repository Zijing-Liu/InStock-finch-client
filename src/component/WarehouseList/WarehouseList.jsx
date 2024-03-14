import "./WarehouseList.scss";
import searchLogo from "../../assets/Icons/search-24px.svg";
import deleteBtn from "../../assets/Icons/delete_outline-24px.svg"
import editBtn from "../../assets/Icons/edit-24px.svg"
import chevron from "../../assets/Icons/chevron_right-24px.svg"
import sort from "../../assets/Icons/sort-24px.svg"
import { Link } from "react-router-dom";

function WarehouseList({warehouseData}) {

    const warehouseObj = {
        title: "Warehouses",
        button: "+ Add New Warehouse",
        id: 1
    }

    console.log(warehouseData)

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
            {console.log(warehouse)}
            return(
                <div key={warehouse.id}>
                    <div className="list__mobile-container">
                        <div className="list__mobile-warehouse">
                            <h2 className="list__header-mobile">Warehouse</h2>
                            <Link to={`/warehouses/${warehouse.id}`} className="list__warehouse">
                                <div className="list__icons">
                                    <p className="list__address">{warehouse.warehouse_name}</p> <img src={chevron} />
                                </div>
                            </Link>
                            <h2 className="list__header-mobile">Address</h2>
                            <p className="list__address-text">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                            <button className="list__btn-mobile" onClick={() => alert(`id: ${warehouse.id}`)}> 
                            <img src={deleteBtn} /> 
                            </button>
                        </div>
                        <div className="list__mobile-warehouse">
                            <h2 className="list__header-mobile">Contact Name</h2>
                            <p>{warehouse.contact_name}</p>
                            <h2 className="list__header-mobile">Contact Information</h2>
                            <p>{warehouse.contact_phone} <br /> {warehouse.contact_email}</p>
                            <Link to={`/warehouses/edit/${warehouse.id}`} className="list__btn-mobile list__btn-mobile--edit">
                                <img src={editBtn} />
                            </Link>
                        </div>
                    </div>

                    <div className="list__warehouse-container">
                        <Link to={`/warehouses/${warehouseObj.id}`} className="list__warehouse">
                            <div className="list__icons list__icons--active">
                                <p className="list__address">{warehouse.warehouse_name}</p> <img src={chevron} />
                            </div>
                        </Link>
                        <p className="list__address">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                        <p className="list__name"> {warehouse.contact_name} </p>
                        <p className="list__info">{warehouse.contact_phone} <br /> {warehouse.contact_email}</p>
                        <div className="list__list-btns">
                            
                            <button onClick={() => alert(`id: ${warehouse.id}`)}>
                                <img src={deleteBtn} />
                            </button>

                            <Link to={`/warehouses/edit/${warehouseObj.id}`}>
                                <img src={editBtn} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
                )}
            </div>
        </section>
    )
}

export default WarehouseList;