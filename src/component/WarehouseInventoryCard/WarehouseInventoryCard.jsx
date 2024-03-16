import "./WarehouseInventoryCard.scss"
import sort from "../../assets/Icons/sort-24px.svg"
import deleteBtn from "../../assets/Icons/delete_outline-24px.svg"
import editBtn from "../../assets/Icons/edit-24px.svg"
import chevron from "../../assets/Icons/chevron_right-24px.svg"
import { Link } from "react-router-dom";

function WarehouseInventoryCard() {
    const item = {
        id: 1,
    }
    return (
        <div>
            <div className="inv-list__header">
                <div className="inv-list__icons inv-list__inventory">
                    <h2 className='inv-list__small-heading'>INVENTORY ITEM</h2> <img src={sort} alt='sort icon' />
                </div>
                <div className="inv-list__icons inv-list__address">
                    <h2 className='inv-list__small-heading'>CATEGORY</h2> <img src={sort} alt='sort icon' />
                </div>
                <div className="inv-list__icons inv-list__name">
                    <h2 className='inv-list__small-heading'>STATUS</h2> <img src={sort} alt='sort icon' />
                </div>
                <div className="inv-list__icons inv-list__info">
                    <h2 className='inv-list__small-heading'>QUANTITY</h2> <img src={sort} alt='sort icon' />
                </div>
                <h2 className="inv-list__action inv-list__small-heading">ACTIONS</h2>
            </div>

            {/* {inventoryItem.map((item) => { */}
            {/* return ( */}
            <div
            // key={item.id}
            >
                <div className="inv-list__mobile-container">
                    <div className="inv-list__mobile-inventory">
                        <h2 className="inv-list__small-heading">INVENTORY ITEM</h2>
                        <Link to={`/warehouses/${item.id}`} className="inv-list__inventory">
                            <div className="inv-list__icons">
                                <p className="inv-list__paragraph inv-list__inventory inv-list__inventory-text">item.itemName</p> <img src={chevron} alt='chevron icon' />
                            </div>
                        </Link>
                        <h2 className="inv-list__small-heading">CATEGORY</h2>
                        <p className="inv-list__paragraph inv-list__address-text inv-list__paragraph">item.category</p>
                        <button className="inv-list__btn-mobile" onClick={() => alert(`id: ${item.id}`)}>
                            <img src={deleteBtn} alt='delete icon' />
                        </button>
                    </div>

                    <div className="inv-list__mobile-inventory">
                        <h2 className="inv-list__small-heading">STATUS</h2>
                        <p className='inv-list__paragraph inv-list__paragraph inv-list__status inv-list__name'>item.status</p>
                        <h2 className="inv-list__small-heading">QTY</h2>
                        <p className='inv-list__paragraph inv-list__paragraph'>item.quantity</p>
                        <Link to={`/warehouses/edit/${item.id}`} className="inv-list__btn-mobile inv-list__btn-mobile--edit">
                            <img src={editBtn} alt='edit icon' />
                        </Link>
                    </div>
                </div>


                <div className="inv-list__inventory-container">
                    <Link to={`/warehouses/${item.id}`} className="inv-list__inventory">
                        <div className="inv-list__icons inv-list__icons--active">
                            <p className="inv-list__paragraph inv-list__inventory inv-list__inventory-text">item.itemName</p> <img src={chevron} alt='arrow icon' />
                        </div>
                    </Link>
                    <p className="inv-list__address">item.category</p>
                    <div className="inv-list__name">
                    <p className="inv-list__status inv-list__paragraph"> item.status</p>
                    </div>
                    <p className="inv-list__info">item.quantity</p>
                    <div className="inv-list__list-btns">
                        <button className="inv-list__delete-btn" onClick={() => alert(`id: ${item.id}`)}>
                            <img src={deleteBtn} alt='delete icon' />
                        </button>
                        <Link to={`/inventory/edit/${item.id}`}>
                            <img src={editBtn} alt='edit icon' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
    // )
    // })
    // }
}

export default WarehouseInventoryCard;