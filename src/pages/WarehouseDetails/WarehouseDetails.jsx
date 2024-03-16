import './WarehouseDetails.scss'
import editIconWhite from '../../assets/Icons/edit-24px-white.svg'
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg"
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


  if (!selectedWarehouse) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <section>
      <div className="warehouse-details" key={selectedWarehouse.id}>
        <div className="warehouse-details__header" >
          <div className='warehouse-details__header-container'>
            <img className="warehouse__icon" src={arrowIcon} alt="arrow-icon" onClick={handleGoBack} />
            <h1 className='warehouse-details__title-name'>{selectedWarehouse.warehouse_name}</h1>
          </div>
          <Link to={`/warehouses/edit/${ID}`} className='warehouse-details__edit--tablet'>
            <button className="warehouse-details__edit-button">
              <img
                // className="warehouse-details__edit-button"
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
    </section >
  )
}

export default WarehouseDetails