import './EditWarehouse.scss'
import { useState } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditWarehouse() {

  const { ID } = useParams();
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BASE_URL;

  const [error, setError] = useState({
    warehouseName: '',
    streetAddress: '',
    city: '',
    country: '',
    contactName: '',
    position: '',
    phoneNumber: '',
    email: '',
  });

  ///// Placeholder until backend is connected
  const [formData, setFormData] = useState({
    warehouseName: 'Brooklyn',
    streetAddress: '918 Morris Lane',
    city: 'Brooklyn',
    country: 'USA',
    contactName: 'Parmin Aujla',
    position: 'Warehouse Manager',
    phoneNumber: '+1 (646) 123-1234',
    email: 'paujla@instock.com',
  });

  function handleChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newFormData = { ...formData };
    newFormData[fieldName] = fieldValue;
    setFormData(newFormData)
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

    if (!formData.warehouseName) {
      newError.warehouseName = "This field is required";
    }
    if (!formData.streetAddress) {
      newError.streetAddress = "This field is required";
    }
    if (!formData.city) {
      newError.city = "This field is required";
    }
    if (!formData.country) {
      newError.country = "This field is required";
    }
    if (!formData.contactName) {
      newError.contactName = "This field is required";
    }
    if (!formData.position) {
      newError.position = "This field is required";
    }
    if (!formData.phoneNumber) {
      newError.phoneNumber = "This field is required";
    }
    if (!formData.email) {
      newError.email = "This field is required";
    }
    if (!isValidEmail(formData.email)) {
      newError.email = "Please enter valid email";
    } if (!isValidPhoneNumber(formData.phoneNumber)) {
      newError.phoneNumber = "Please enter valid phone number";
    }

    setError(newError);

    console.log(formData)

    const updateDetails = async () => {
      try {
        await axios.put(`${baseURL}${ID}`, formData)
        console.log(formData)
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
              name="warehouseName"
              value={formData.warehouseName}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.warehouseName ? '#C94515' : '' }}
            />
            {error.warehouseName && <div className="warehouse__form-error">{error.warehouseName}</div>}

            <label htmlFor="streetAddress" className='warehouse__form-label'>Street Address</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.streetAddress ? '#C94515' : '' }}
            />
            {error.streetAddress && <div className="warehouse__form-error">{error.streetAddress}</div>}

            <label htmlFor="city" className='warehouse__form-label'>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.city ? '#C94515' : '' }}
            />
            {error.city && <div className="warehouse__form-error">{error.city}</div>}

            <label htmlFor="country" className='warehouse__form-label'>Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
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
              name="contactName"
              value={formData.contactName}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.contactName ? '#C94515' : '' }}
            />
            {error.contactName && <div className="warehouse__form-error">{error.contactName}</div>}

            <label htmlFor="position" className='warehouse__form-label'>Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.position ? '#C94515' : '' }}
            />
            {error.position && <div className="warehouse__form-error">{error.position}</div>}

            <label htmlFor="phoneNumber" className='warehouse__form-label'>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.phoneNumber ? '#C94515' : '' }}
            />
            {error.phoneNumber && <div className="warehouse__form-error">{error.phoneNumber}</div>}

            <label htmlFor="email" className='warehouse__form-label'>Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              className='warehouse__form-input'
              onChange={handleChange}
              style={{ borderColor: error.email ? '#C94515' : '' }}
            />
            {error.email && <div className="warehouse__form-error">{error.email}</div>}

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