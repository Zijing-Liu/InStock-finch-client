import './EditWarehouse.scss'
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditWarehouse() {

  const { ID } = useParams();
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BASE_URL;

  const [selectedWarehouse, setSelectedWarehouse] = useState({
    warehouse_name: '',
    address: '',
    city: '',
    country: '',
    contact_name: '',
    contact_position: '',
    contact_phone: '',
    contact_email: '',
  });

  const [error, setError] = useState({
    warehouse_name: '',
    address: '',
    city: '',
    country: '',
    contact_name: '',
    contact_position: '',
    contact_phone: '',
    contact_email: '',
  });

  useEffect(() => {
    const warehouseDataTest = async () => {
      try {
        const response = await axios.get(`${baseURL}api/warehouses/${ID}`)
        setSelectedWarehouse(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    warehouseDataTest();
  }, [])

  function handleChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newFormData = { ...selectedWarehouse };
    newFormData[fieldName] = fieldValue;
    setSelectedWarehouse(newFormData)
  };

  function isValidEmail(email) {
    // regex matches "example@example.com" (username before "@" and domain afterwards)
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  function isValidPhoneNumber(phoneNumber) {
    // regex matches numbers such as "+1 (646) 123-1234" and "780-555-5555"
    const phoneRegex = /^(?:\+\d{1,2}\s\(\d{3}\)\s\d{3}-\d{4}|\d{3}-\d{3}-\d{4})$/;
    return phoneRegex.test(phoneNumber);
  };

  function handleSubmit(event) {
    event.preventDefault();

    const newError = {};

    if (!selectedWarehouse.warehouse_name) {
      newError.warehouse_name = "This field is required";
    }
    if (!selectedWarehouse.address) {
      newError.address = "This field is required";
    }
    if (!selectedWarehouse.city) {
      newError.city = "This field is required";
    }
    if (!selectedWarehouse.country) {
      newError.country = "This field is required";
    }
    if (!selectedWarehouse.contact_name) {
      newError.contact_name = "This field is required";
    }
    if (!selectedWarehouse.contact_position) {
      newError.contact_position = "This field is required";
    }
    if (!selectedWarehouse.contact_phone) {
      newError.contact_phone = "This field is required";
    }
    if (!selectedWarehouse.contact_email) {
      newError.contact_email = "This field is required";
    }
    if (!isValidEmail(selectedWarehouse.contact_email)) {
      newError.contact_email = "Please enter valid email";
    } if (!isValidPhoneNumber(selectedWarehouse.contact_phone)) {
      newError.contact_phone = "Please enter valid phone number";
    }

    setError(newError);

    const updateDetails = async () => {
      try {
        await axios.put(`${baseURL}api/warehouses/${ID}`, selectedWarehouse)
      } catch (error) {
        console.log(error)
      }
    }
    updateDetails();
  }

  return (
    <section className='warehouse'>
      <h1 className='warehouse__title'>Edit Warehouse</h1>
      <form action="post" className='warehouse__form' onSubmit={handleSubmit}>
        <div className='warehouse__form-fields'>
          <div className='warehouse__form-section'>
            <h2 className='warehouse__form-heading'>Warehouse Details</h2>
            <label htmlFor="warehouseName" className='warehouse__form-label'>Warehouse Name</label>
            <input
              type="text"
              name="warehouse_name"
              value={selectedWarehouse.warehouse_name}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.warehouse_name ? '#C94515' : '' }}
            />
            {error.warehouse_name && <div className="warehouse__form-error">{error.warehouse_name}</div>}

            <label htmlFor="streetAddress" className='warehouse__form-label'>Street Address</label>
            <input
              type="text"
              name="address"
              value={selectedWarehouse.address}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.address ? '#C94515' : '' }}
            />
            {error.address && <div className="warehouse__form-error">{error.address}</div>}

            <label htmlFor="city" className='warehouse__form-label'>City</label>
            <input
              type="text"
              name="city"
              value={selectedWarehouse.city}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.city ? '#C94515' : '' }}
            />
            {error.city && <div className="warehouse__form-error">{error.city}</div>}

            <label htmlFor="country" className='warehouse__form-label'>Country</label>
            <input
              type="text"
              name="country"
              value={selectedWarehouse.country}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.country ? '#C94515' : '' }}
            />
            {error.country && <div className="warehouse__form-error">{error.country}</div>}

          </div>
          <div className='warehouse__form-section warehouse__form-section--contact'>
            <h2 className='warehouse__form-heading'>Contact Details</h2>
            <label htmlFor="contactName" className='warehouse__form-label'>Contact Name</label>
            <input
              type="text"
              name="contact_name"
              value={selectedWarehouse.contact_name}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.contact_name ? '#C94515' : '' }}
            />
            {error.contact_name && <div className="warehouse__form-error">{error.contact_name}</div>}

            <label htmlFor="position" className='warehouse__form-label'>Position</label>
            <input
              type="text"
              name="contact_position"
              value={selectedWarehouse.contact_position}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.contact_position ? '#C94515' : '' }}
            />
            {error.contact_position && <div className="warehouse__form-error">{error.contact_position}</div>}

            <label htmlFor="phoneNumber" className='warehouse__form-label'>Phone Number</label>
            <input
              type="text"
              name="contact_phone"
              value={selectedWarehouse.contact_phone}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.contact_phone ? '#C94515' : '' }}
            />
            {error.contact_phone && <div className="warehouse__form-error">{error.contact_phone}</div>}

            <label htmlFor="email" className='warehouse__form-label'>Email</label>
            <input
              type="text"
              name="contact_email"
              value={selectedWarehouse.contact_email}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.contact_email ? '#C94515' : '' }}
            />
            {error.contact_email && <div className="warehouse__form-error">{error.contact_email}</div>}

          </div>
        </div>
        <div className='warehouse__form-buttons'>
          <button className='warehouse__form-buttons--cancel' onClick={() => navigate('/')}>Cancel</button>
          <button className='warehouse__form-buttons--save' type='submit' >Save</button>
        </div>
      </form>
    </section >
  )
}