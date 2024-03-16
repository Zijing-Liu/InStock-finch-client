import "./WarehouseInventoryCard.scss"
import deleteBtn from "../../assets/Icons/delete_outline-24px.svg"
import editBtn from "../../assets/Icons/edit-24px.svg"
import chevron from "../../assets/Icons/chevron_right-24px.svg"
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import DeleteModel from "../DeleteModel/DeleteModel";

function WarehouseInventoryCard({ item, setWarehouseInv, warehouseInv }) {
    // const baseURL = process.env.REACT_APP_BASE_URL
    // const [warehouseInv, setWarehouseInv] = useState(null)
    // const [list, setList] = useState(null) //Pass down to delete modal
    // const [invItem, setInvItem] = useState(null)
    // const { ID } = useParams();

    // useEffect(() => {
    //     const warehouseData = async () => {
    //         try {
    //             const response = await axios.get(`${baseURL}warehouses/${ID}/inventories`)
    //             setList(response.data)
    //         } catch (error) {
    //             console.log("WareInv data error")
    //         }
    //     }
    //     warehouseDataTest();
    // }, [ID])

    // console.log(list)

    // if (!list) {
    //     return <div>Loading...</div>
    // }

    return (
        <div>

            <div>
                <div className="inv-list__mobile-container">
                    <div className="inv-list__mobile-inventory">
                        <h2 className="inv-list__small-heading">INVENTORY ITEM</h2>
                        <Link to={`/inventory/${item.id}`} className="inv-list__inventory">
                            <div className="inv-list__icons">
                                <p className="inv-list__paragraph inv-list__inventory inv-list__inventory-text">{item.item_name}</p> <img src={chevron} alt='chevron icon' />
                            </div>
                        </Link>
                        <h2 className="inv-list__small-heading">CATEGORY</h2>
                        <p className="inv-list__paragraph inv-list__address-text inv-list__paragraph">{item.category}</p>
                        <button className="inv-list__btn-mobile">
                            <DeleteModel setList={setWarehouseInv} list={warehouseInv} itemId={item.id} listName={"warehouses"} itemName={item.warehouse_name} />
                        </button>
                    </div>

                    <div className="inv-list__mobile-inventory">
                        <h2 className="inv-list__small-heading">STATUS</h2>
                        <p className={"inv-list__paragraph inv-list__paragraph inv-list__status inv-list__name " + (item.status === "In Stock" ? "inv-list__status--in-stock" : "inv-list__status--no-stock")}>{item.status}</p>
                        <h2 className="inv-list__small-heading">QTY</h2>
                        <p className='inv-list__paragraph inv-list__paragraph'>{item.quantity}</p>
                        <Link to={`/warehouses/edit/${item.id}`} className="inv-list__btn-mobile inv-list__btn-mobile--edit">
                            <img src={editBtn} alt='edit icon' />
                        </Link>
                    </div>
                </div>

                <div className="inv-list__inventory-container">
                    <Link to={`/warehouses/${item.id}`} className="inv-list__inventory">
                        <div className="inv-list__icons inv-list__icons--active">
                            <p className="inv-list__paragraph inv-list__inventory inv-list__inventory-text">{item.item_name}</p> <img src={chevron} alt='arrow icon' />
                        </div>
                    </Link>
                    <p className="inv-list__address">{item.category}</p>
                    <div className="inv-list__name">
                        <p className={"inv-list__status inv-list__paragraph " + (item.status === "In Stock" ? "inv-list__status--in-stock" : "inv-list__status--no-stock")}> {item.status} </p>
                    </div>
                    <p className="inv-list__info">{item.quantity}</p>
                    <div className="inv-list__list-btns">
                        <button className="inv-list__delete-btn" onClick={console.log(item.id)}>
                        <DeleteModel setList={setWarehouseInv} list={warehouseInv} itemId={item.id} listName={"inventories"} itemName={item.warehouse_name} />
                        </button>
                        <Link to={`/inventory/edit/${item.id}`}>
                            <img src={editBtn} alt='edit icon' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WarehouseInventoryCard;