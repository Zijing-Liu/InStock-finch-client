import './WarehouseDetails.scss'
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import editIcon from "../../assets/Icons/edit-24px.svg"
import sortIcon from "../../assets/Icons/sort-24px.svg"
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg"
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg"
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

function WarehouseDetails() {

  // Pass down props from warehouselist??
  const inventoryItem = [
    {
      id: '1',
      itemName: 'Television',
      category: 'Electronics',
      status: 'In Stock',
      quantity: 500,
    },
    {
      id: '2',
      itemName: 'Television',
      category: 'Electronics',
      status: 'In Stock',
      quantity: 500,
    }
  ]
  const baseURL = process.env.REACT_APP_BASE_URL
  const [selectedWarehouse, setSelectedWarehouse] = useState("")
  const { ID } = useParams();

  useEffect(() => {
    const warehouseDataTest = async () => {
      try {
        const response = await axios.get(`${baseURL}api/warehouses/${ID}`)
        setSelectedWarehouse(response.data)
        console.log(response.data)
      } catch (error) {
        console.log("warehouseList data error")
      }
    }
    warehouseDataTest();
  }, [])


  if (!selectedWarehouse) {
    return (
      <div>loading...</div>
    )
  }

  return (
    <section>

      <div className="warehouse-details" key={selectedWarehouse.id}>
        <div className="warehouse-details__header" >
          <div className='warehouse-details__header-container'>
            <img src={arrowIcon} className="warehouse-details__edit-icon" alt='edit icon'></img>
            <h1 className='warehouse-details__title-name'>{selectedWarehouse.warehouse_name}</h1>
          </div>
          <img src={editIcon} className="warehouse-details__edit-icon" alt='edit icon'></img>
        </div>


        <div className="warehouse-details__info">
          <div className='warehouse-details__address-wrapper'>
            <h4 className='warehouse-details__heading'>WAREHOUSE ADDRESS:</h4>
            <p className='warehouse-details__content'>{selectedWarehouse.address}, {selectedWarehouse.city}, {selectedWarehouse.country}</p>
          </div>
          <div className='warehouse-details__contact-wrapper'>
            <div className='warehouse-details__contact-name'>
              <h4 className='warehouse-details__heading'>CONTACT NAME:</h4>
              <p className='warehouse-details__content'>{selectedWarehouse.contact_name}</p>
              <p className='warehouse-details__content'>{selectedWarehouse.contact_position}</p>
            </div>
            <div className='warehouse-details__contact-info'>
              <h4 className='warehouse-details__heading'>CONTACT INFORMATION:</h4>
              <p className='warehouse-details__content'>{selectedWarehouse.contact_phone}</p>
              <p className='warehouse-details__content'>{selectedWarehouse.contact_email}</p>
            </div>
          </div>
        </div>


        <div className="inv-list__header">
          <div className="inv-list__icons inv-list__warehouse">
            <h2 className='inv-list__small-heading'>INVENTORY ITEM</h2> <img src={sortIcon} alt='sort icon' />
          </div>
          <div className="inv-list__icons inv-list__address">
            <h2 className='inv-list__small-heading'>CATEGORY</h2> <img src={sortIcon} alt='sort icon' />
          </div>
          <div className="inv-list__icons inv-list__name">
            <h2 className='inv-list__small-heading'>STATUS</h2> <img src={sortIcon} alt='sort icon' />
          </div>
          <div className="inv-list__icons inv-list__info">
            <h2 className='inv-list__small-heading'>QUANTITY</h2> <img src={sortIcon} alt='sort icon' />
          </div>
          <h2 className="inv-list__action inv-list__small-heading">ACTIONS</h2>
        </div>
        {inventoryItem.map((item) => {
          return (
            <div key={item.id}>
              <div className="inv-list__mobile-container">
                <div className="inv-list__mobile-inventory">
                  <h2 className="inv-list__small-heading">INVENTORY ITEM</h2>
                  <Link to={`/warehouses/${item.id}`} className="inv-list__inventory">
                    <div className="inv-list__icons">
                      <p className="inv-list__address inv-list__paragraph">{item.itemName}</p> <img src={chevronIcon} alt='chevron icon' />
                    </div>
                  </Link>
                  <h2 className="inv-list__small-heading">CATEGORY</h2>
                  <p className="inv-list__address-text inv-list__paragraph">{item.category}</p>
                  <button className="inv-list__btn-mobile" onClick={() => alert(`id: ${item.id}`)}>
                    <img src={deleteIcon} alt='delete icon' />
                  </button>
                </div>
                <div className="inv-list__mobile-inventory">
                  <h2 className="inv-list__small-heading">STATUS</h2>
                  <p className='inv-list__paragraph'>{item.status}</p>
                  <h2 className="inv-list__small-heading">QTY</h2>
                  <p className='inv-list__paragraph'>{item.quantity}</p>
                  <Link to={`/warehouses/edit/${item.id}`} className="inv-list__btn-mobile inv-list__btn-mobile--edit">
                    <img src={editIcon} alt='edit icon' />
                  </Link>
                </div>
              </div>

              <div className="inv-list__inventory-container">
                <Link to={`/warehouses/${item.id}`} className="inv-list__inventory">
                  <div className="inv-list__icons inv-list__icons--active">
                    <p className="inv-list__address">{item.itemName}</p> <img src={chevronIcon} alt='arrow icon' />
                  </div>
                </Link>
                <p className="inv-list__address">{item.category}</p>
                <p className="inv-list__name"> {item.status} </p>
                <p className="inv-list__info">{item.quantity}</p>
                <div className="inv-list__list-btns">

                  <button onClick={() => alert(`id: ${item.id}`)}>
                    <img src={deleteIcon} alt='delete icon' />
                  </button>

                  <Link to={`/warehouses/edit/${item.id}`}>
                    <img src={editIcon} alt='edit icon' />
                  </Link>
                </div>
              </div>
            </div>
          )
        }
        )}
      </div>
    </section>
  )
}

export default WarehouseDetails