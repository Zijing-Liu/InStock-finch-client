import "./WarehouseCard.scss"
import { Link } from "react-router-dom";
import deleteBtn from "../../assets/Icons/delete_outline-24px.svg"
import editBtn from "../../assets/Icons/edit-24px.svg"
import chevron from "../../assets/Icons/chevron_right-24px.svg"


function WarehouseCard({ warehouse, setDeleteWarehouseOpen, setDeleteWarehouseId }) {

    function handleOnClick() {
        setDeleteWarehouseOpen(true)
        setDeleteWarehouseId(warehouse.id)
    }

    return (
        <div>
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
                    <button className="list__btn-mobile" onClick={handleOnClick}>
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
                <Link to={`/warehouses/${warehouse.id}`} className="list__warehouse">
                    <div className="list__icons list__icons--active">
                        <p className="list__address">{warehouse.warehouse_name}</p> <img src={chevron} />
                    </div>
                </Link>
                <p className="list__address">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                <p className="list__name"> {warehouse.contact_name} </p>
                <p className="list__info">{warehouse.contact_phone} <br /> {warehouse.contact_email}</p>
                <div className="list__list-btns">
                    <button onClick={handleOnClick}>
                        <img src={deleteBtn} />
                    </button>

                    <Link to={`/warehouses/edit/${warehouse.id}`}>
                        <img src={editBtn} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WarehouseCard