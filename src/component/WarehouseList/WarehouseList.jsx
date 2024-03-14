import "./WarehouseList.scss";
import searchLogo from "../../assets/Icons/search-24px.svg";
import deleteBtn from "../../assets/Icons/delete_outline-24px.svg"
import editBtn from "../../assets/Icons/edit-24px.svg"
import chevron from "../../assets/Icons/chevron_right-24px.svg"
import sort from "../../assets/Icons/sort-24px.svg"
import { Link } from "react-router-dom";

function WarehouseList() {

    const warehouseObj = {
        title: "Warehouses",
        button: "+ Add New Warehouse",
        id: 1
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

                <div key={warehouseObj.id}>
                    <div className="list__mobile-container">
                        <div className="list__warehouse-info">
                            <h2 className="list__header-mobile">Warehouse</h2>
                            <Link to={`/warehouses/${warehouseObj.id}`} className="list__warehouse">
                                <div className="list__icons">
                                    <p className="list__address">Test Warehouse</p> <img src={chevron} />
                                </div>
                            </Link>
                            <h2 className="list__header-mobile">Address</h2>
                            <p>123 street, <br /> Test City, Canada</p>
                            <button className="list__btn-mobile" onClick=""> 
                            <img src={deleteBtn} /> 
                            </button>
                        </div>
                        <div className="list__warehouse-contact">
                            <h2 className="list__header-mobile">Contact Name</h2>
                            <p>John Doe</p>
                            <h2 className="list__header-mobile">Contact Information</h2>
                            <p>123-456-7890 <br /> abc@test.xyz</p>
                            <Link to={`/warehouses/edit/${warehouseObj.id}`} className="list__btn-mobile">
                                <img src={editBtn} />
                            </Link>
                        </div>
                    </div>

                    <div className="list__warehouse-container">
                        <Link to={`/warehouses/${warehouseObj.id}`} className="list__warehouse">
                            <div className="list__icons list__icons--active">
                                <p className="list__address">Test Warehouse</p> <img src={chevron} />
                            </div>
                        </Link>
                        <p className="list__address">123 street, Test City, Canada</p>
                        <p className="list__name"> John Doe</p>
                        <p className="list__info">123-456-7890 <br /> abc@test.xyz</p>
                        <div className="list__list-btns">
                            
                            <button onClick="">
                                <img src={deleteBtn} />
                            </button>

                            <Link to={`/warehouses/edit/${warehouseObj.id}`}>
                                <img src={editBtn} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WarehouseList;