import './WarehouseDetails.scss'
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import editIcon from "../../assets/Icons/edit-24px.svg"
import sortIcon from "../../assets/Icons/sort-24px.svg"
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg"
import { Link } from 'react-router-dom';
// import { useState } from 'react';

function WarehouseDetails() {

  const warehouseData = {
    warehouseName: 'Brooklyn',
    streetAddress: '918 Morris Lane',
    city: 'Brooklyn',
    country: 'USA',
    contactName: 'Parmin Aujla',
    position: 'Warehouse Manager',
    phoneNumber: '+1 (646) 123-1234',
    email: 'paujla@instock.com',
  }

  const inventoryItem = [
    {
      itemName: 'Television',
      category: 'Electronics',
      status: 'In Stock',
      quantity: 500,
    },
    {
      itemName: 'Television',
      category: 'Electronics',
      status: 'In Stock',
      quantity: 500,
    }
  ]

  return (
    <section>

      <div className="warehouse-details">
        <div className="warehouse-details__header">
          <h1 className='warehouse-details__title-name'>{warehouseData.warehouseName}</h1>
          <img src={editIcon} className="warehouse-details__edit-icon" alt='edit icon'></img>
        </div>


        <div className="warehouse-details__info">
          <div className='warehouse-details__address-wrapper'>
            <h4 className='warehouse-details__address'>WAREHOUSE ADDRESS:</h4>
            <p>{warehouseData.streetAddress}, {warehouseData.city}, {warehouseData.country}</p>
          </div>
          <div className='warehouse-details__contact-wrapper'>
            <div className='warehouse-details__contact-name'>
              <h4 className='warehouse-details__contact'>CONTACT NAME:</h4>
              <p>{warehouseData.contactName}</p>
              <p>{warehouseData.position}</p>
            </div>
            <div className='warehouse-details__contact-info'>
              <h4 className='warehouse-details__contact'>CONTACT INFORMATION:</h4>
              <p>{warehouseData.phoneNumber}</p>
              <p>{warehouseData.email}</p>
            </div>
          </div>
        </div>


        {/* Only displays for tablet and above */}
        <div className="warehouse-details__sort-bar">
          <div className="warehouse-details__item-title">
            <h4>INVENTORY ITEM</h4> <img src={sortIcon} alt='sort icon' />
          </div>
          <div className="warehouse-details__item-title">
            <h4>CATEGORY</h4> <img src={sortIcon} alt='sort icon' />
          </div>
          <div className="warehouse-details__item-title">
            <h4>STATUS</h4> <img src={sortIcon} alt='sort icon' />
          </div>
          <div className="warehouse-details__item-title">
            <h4>QUANTITY</h4> <img src={sortIcon} alt='sort icon' />
          </div>
          <h4 className="warehouse-details__item-title">ACTIONS</h4>
        </div>


        {/* Map over each object in API response */}
        {inventoryItem.map((item) => {
          return (
            <div className="warehouse-details__inventory-card">

              <div className='warehouse-details__inventory-group'>
                <div className='warehouse-details__inventory-name'>
                  <h4 className='warehouse-details__inventory-title--mobile'>INVENTORY ITEM</h4>
                  <Link to={`/inventory/${item.id}`} className="warehouse-details__inventory-link">
                    <div className='warehouse-details__inventory-link'>
                      <p>{item.itemName}</p> <img src={chevronIcon} alt='arrow icon' />
                    </div>
                  </Link>
                </div>
                <div className='warehouse-details__inventory-category'>
                  <h4 className='warehouse-details__inventory-title--mobile'>CATEGORY</h4>
                  <p>{item.category}</p>
                </div>
              </div>

              <div className='warehouse-details__inventory-group'>
                <div className='warehouse-details__inventory-status'>
                  <h4 className='warehouse-details__inventory-title--mobile'>STATUS</h4>
                  <p>{item.status}</p>
                </div>
                <div className='warehouse-details__inventory-quatity'>
                  <h4 className='warehouse-details__inventory-title--mobile'>QUANTITY</h4>
                  <p>{item.quantity}</p>
                </div>
              </div>

              <div className='warehouse-details__inventory-group'>
                <img src={deleteIcon} alt='delete icon'></img>
                <img src={editIcon} alt='edit icon'></img>
              </div>

            </div>
          )
        })}


      </div>
    </section>
  )
}

export default WarehouseDetails