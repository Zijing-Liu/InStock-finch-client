import './WarehouseDetails.scss'
import WarehouseInventoryCard from "../../component/WarehouseInventoryCard/WarehouseInventoryCard"
import editIconWhite from '../../assets/Icons/edit-24px-white.svg'
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg"
import sort from "../../assets/Icons/sort-24px.svg"
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

function WarehouseDetails() {


  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const baseURL = process.env.REACT_APP_BASE_URL
  const [selectedWarehouse, setSelectedWarehouse] = useState("")
  const [warehouseInv, setWarehouseInv] = useState(null)
  const { ID } = useParams();

  useEffect(() => {
    const warehouseDataTest = async () => {
      try {
        const response = await axios.get(`${baseURL}warehouses/${ID}`)
        setSelectedWarehouse(response.data)
      } catch (error) {
        console.log("warehouseList data error")
      }
    }
    warehouseDataTest();
  }, [ID])

  useEffect(() => {
    const warehouseDataInv = async () => {
      try {
        const response = await axios.get(`${baseURL}warehouses/${ID}/inventories`)
        setWarehouseInv(response.data)
      } catch (error) {
        console.log("WareInv data error")
      }
    }
    warehouseDataInv();
  }, [ID])

  if (!selectedWarehouse) {
    return (
      <div>Loading...</div>
    )
  }

  if (!warehouseInv) {
    return <div>Loading...</div>
  }

  return (
    <section>
      <div className="warehouse-details" key={selectedWarehouse.id}>
        <div className="warehouse-details__header" >
          <div className='warehouse-details__header-container'>
            <img className="warehouse__icon" src={arrowIcon} alt="arrow-icon" onClick={handleGoBack} />
            <h1 className='warehouse-details__title-name'>{selectedWarehouse.warehouse_name}</h1>
          </div>
          <Link to={`/warehouses/${ID}/edit`} className='warehouse-details__edit--tablet'>
            <button className="warehouse-details__edit-button">
              <img
                src={editIconWhite}
                alt="Edit Icon"
              />
              <p className="warehouse-details__edit-text--tablet">Edit</p>
            </button>
          </Link>
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
      </div>

      <div className="inv-list__header">
        <div className="inv-list__icons inv-list__inventory">
          <h2 className='inv-list__small-heading'>INVENTORY ITEM</h2> <img src={sort} alt='sort icon' />
        </div>
        <div className="inv-list__icons inv-list__address">
          <h2 className="inv-list__small-heading">CATEGORY</h2> <img src={sort} alt='sort icon' />
        </div>
        <div className="inv-list__icons inv-list__name">
          <h2 className='inv-list__small-heading'>STATUS</h2> <img src={sort} alt='sort icon' />
        </div>
        <div className="inv-list__icons inv-list__info">
          <h2 className='inv-list__small-heading'>QUANTITY</h2> <img src={sort} alt='sort icon' />
        </div>
        <h2 className="inv-list__action inv-list__small-heading">ACTIONS</h2>
      </div>

      {warehouseInv.map((item, index) => {
        return (
          <WarehouseInventoryCard
            key={item.id}
            item={item}
            setWarehouseInv={setWarehouseInv}
            warehouseInv={warehouseInv}
            index={index}
          />
        )
      })
      }
    </section >
  )
}

export default WarehouseDetails