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
        button: "+ Add New Warehouse"
    }

    return (
        <section className="list">
            <div className="list__main-container">
                <h1>{warehouseObj.title}</h1>
                <div className="list__search-spacing">
                    <div className="list__search-container">
                        <input className="list__search" type="text" name="search-bar" placeholder="Search..."></input>
                        <button className="list__search-btn">
                            <img src={searchLogo} className="list__search-img" />
                        </button>
                    </div>
                    <button className="list__btn">{warehouseObj.button}</button>
                </div>
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

            <div className="list__mobile-container">
                <div className="list__warehouse-info">
                    <h2 className="list__header-mobile">Warehouse</h2>
                    <Link to="warehouse/:id" className="list__warehouse">
                        <div className="list__icons">
                            <p className="list__address">Test Warehouse</p> <img src={chevron} />
                        </div>
                    </Link>
                    <h2 className="list__header-mobile">Address</h2>
                    <p>123 street, <br /> Test City, Canada</p>
                    <img className="list__btn-mobile" src={deleteBtn} />
                </div>
                <div className="list__warehouse-contact">
                    <h2 className="list__header-mobile">Contact Name</h2>
                    <p>John Doe</p>
                    <h2 className="list__header-mobile">Contact Information</h2>
                    <p>123-456-7890 <br /> abc@test.xyz</p>
                    <img className="list__btn-mobile" src={editBtn} />
                </div>
                <div className="list__list-btns"> <img src={deleteBtn} /> <img src={editBtn} /> </div>
            </div>

            <div className="list__warehouse-container">
                <Link to="warehouse/:id" className="list__warehouse">
                    <div className="list__icons list__icons--active">
                        <p>warehouse.warehouse_name</p> <img src={chevron} />
                    </div>
                </Link>
                <p className="list__address">warehouse.address, warehouse.city, warehouse.country</p>
                <p className="list__name">warehouse.contact_name</p>
                <p className="list__info">warehouse.contact_phone <br /> warehouse.contact_email</p>
                <div className="list__list-btns"> <img src={deleteBtn} /> <img src={editBtn} /> </div>
            </div>

        </section>
    )
}

export default WarehouseList;