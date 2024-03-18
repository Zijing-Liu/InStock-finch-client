import "./WarehouseCard.scss"
import { Link } from "react-router-dom";
import editBtn from "../../assets/Icons/edit-24px.svg"
import chevron from "../../assets/Icons/chevron_right-24px.svg"
import DeleteModel from "../DeleteModel/DeleteModel"

function WarehouseCard({ warehouse, setWarehouseData, warehouseData, index}) {

    return (
        <div>
            <div className="ware-list__mobile-container">
                <div className="ware-list__mobile-warehouse">
                    <h2 className="ware-list__header-mobile ware-list__table-text">Warehouse</h2>
                    <Link to={`/warehouses/${warehouse.id}`} className="ware-list__warehouse">
                        <div className="ware-list__icons">
                            <p className="ware-list__p ware-list__warehouse ware-list__warehouse">{warehouse.warehouse_name}</p> <img src={chevron} alt="chevron" />
                        </div>
                    </Link>
                    <h2 className="ware-list__header-mobile ware-list__table-text">Address</h2>
                    <p className="ware-list__address-text ware-list__p">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                    <button className="ware-list__btn-mobile">
                        <DeleteModel list={warehouseData} setList={setWarehouseData} itemId={warehouse.id} listName={"warehouses"} itemName={warehouse.warehouse_name} />
                    </button>
                </div>
                <div className="ware-list__mobile-warehouse">
                    <h2 className="ware-list__header-mobile ware-list__table-text">Contact Name</h2>
                    <p className="ware-list__p">{warehouse.contact_name}</p>
                    <h2 className="ware-list__header-mobile ware-list__table-text">Contact Information</h2>
                    <p className="ware-list__p">{warehouse.contact_phone} <br /> {warehouse.contact_email}</p>
                    <Link to={`/warehouses/${warehouse.id}/edit`} className="ware-list__btn-mobile ware-list__btn-mobile--edit">
                        <img src={editBtn} alt="edit button" />
                    </Link>
                </div>
            </div>

            <div className={"ware-list__warehouse-container" + " " + (index === 0 ? '' : 'ware-list__border-top' )}>
                <Link to={`/warehouses/${warehouse.id}`} className="ware-list__warehouse">
                    <div className="ware-list__icons ware-list__icons--active">
                        <p className="ware-list__p ware-list__warehouse ware-list__warehouse-text">{warehouse.warehouse_name}</p> <img src={chevron} alt="chevron" />
                    </div>
                </Link>
                <p className="ware-list__address ware-list__p">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                <p className="ware-list__name ware-list__p"> {warehouse.contact_name} </p>
                <p className="ware-list__info ware-list__p">{warehouse.contact_phone} <br /> {warehouse.contact_email}</p>
                <div className="ware-list__list-btns">
                    <button className="ware-list__delete-btn">
                    <DeleteModel list={warehouseData} setList={setWarehouseData} itemId={warehouse.id} listName={"warehouses"} itemName={warehouse.warehouse_name} />
                    </button>

                    <Link to={`/warehouses/${warehouse.id}/edit`}>
                        <img src={editBtn} alt="edit button" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WarehouseCard