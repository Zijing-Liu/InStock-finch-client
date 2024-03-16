import "./InventoryCard.scss"
import { Link } from "react-router-dom";
import deleteBtn from "../../assets/Icons/delete_outline-24px.svg"
import editBtn from "../../assets/Icons/edit-24px.svg"
import chevron from "../../assets/Icons/chevron_right-24px.svg"


function InventoryCard({ inventory, getWarehouseName }) {
   
   
   function getStatusClass(quantity) {
    return quantity > 0 ? 'in-stock' : 'out-of-stock';
  }
 

    function handleOnClick() {
        alert("i've been clicked")
    }


    return (
        <div>
            <div className="list__mobile-container">
                <div className="list__mobile-warehouse">
                    <h2 className="list__header-mobile list__table-text">Inventory Item</h2>
                    <Link to={`/inventory/${inventory.id}`} className="list__warehouse">
                        <div className="list__icons">
                            <p className="list__p list__warehouse list__warehouse-text">{inventory.item_name}</p> <img src={chevron} alt="chevron" />
                        </div>
                    </Link>
                    <h2 className="list__header-mobile list__table-text">Category</h2>
                    <p className="list__address-text list__p">{inventory.category}</p>
                    <button className="list__btn-mobile" onClick={handleOnClick}>
                        <img src={deleteBtn} alt="delete button" />
                    </button>
                </div>
                <div className="list__mobile-warehouse">
                    <h2 className="list__header-mobile list__table-text">Status</h2>
                    <p className={`${getStatusClass(inventory.quantity)}`}>{inventory.status}</p>
                    <h2 className="list__header-mobile list__table-text">Qty</h2>
                    <p className="list__p">{inventory.quantity}</p>
                    <Link to={`/inventory/edit/${inventory.id}`} className="list__btn-mobile list__btn-mobile--edit">
                        <img src={editBtn} alt="edit button" />
                    </Link>
                </div>
            </div>

            <div className="list__warehouse-container">
                <Link to={`/inventory/${inventory.id}`} className="list__warehouse list__table-text">
                    <div className="list__icons list__icons--active">
                        <p className="list__p list__warehouse list__warehouse-text">{inventory.item_name}</p> <img src={chevron} alt="chevron" />
                    </div>
                </Link>
                <p className="list__address list__p">{inventory.category}</p>
                <p className={`list__info list__p ${getStatusClass(inventory.quantity)}`}>{inventory.status}</p>
                <p className="list__info list__p">{inventory.quantity}</p>
                <p className="list__info list__p">{getWarehouseName(inventory.id)}</p>
                <div className="list__list-btns">
                    <button className="list__delete-btn" onClick={handleOnClick}>
                        <img src={deleteBtn} alt="delete button" />
                    </button>

                    

                    <Link to={`/inventory/edit/${inventory.id}`}>
                        <img src={editBtn} alt="edit button" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default InventoryCard