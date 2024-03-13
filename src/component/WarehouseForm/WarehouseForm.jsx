import './WarehouseForm.scss'
import { useState } from 'react'

export default function WarehouseForm() {

    const [error, setError] = useState("")

    function handleChange(event) {

    }

    function handleSubmit(event) {

    }

    return (
        <section className='edit-warehouse'>
            <h1 className='edit-warehouse__title'>Edit Warehouse</h1>
            <form action="" className='edit-warehouse__form' onSubmit={handleSubmit}>
                <div className='edit-warehouse__form-fields'>
                    <div className='edit-warehouse__form-section'>
                        <h2 className='edit-warehouse__form-heading'>Warehouse Details</h2>
                        <label htmlFor="warehouse-name" className='edit-warehouse__form-label'>Warehouse Name</label>
                        <input type="text" className='edit-warehouse__form-input' />
                        <label htmlFor="street-address" className='edit-warehouse__form-label'>Street Address</label>
                        <input type="text" className='edit-warehouse__form-input' />
                        <label htmlFor="city" className='edit-warehouse__form-label'>City</label>
                        <input type="text" className='edit-warehouse__form-input' />
                        <label htmlFor="country" className='edit-warehouse__form-label'>Country</label>
                        <input type="text" className='edit-warehouse__form-input' />
                    </div>
                    <div className='edit-warehouse__form-section edit-warehouse__form-section--contact'>
                        <h2 className='edit-warehouse__form-heading'>Contact Details</h2>
                        <label htmlFor="contact-name" className='edit-warehouse__form-label'>Contact Name</label>
                        <input type="text" className='edit-warehouse__form-input' />
                        <label htmlFor="position" className='edit-warehouse__form-label'>Position</label>
                        <input type="text" className='edit-warehouse__form-input' />
                        <label htmlFor="phone-number" className='edit-warehouse__form-label'>Phone Number</label>
                        <input type="text" className='edit-warehouse__form-input' />
                        <label htmlFor="email" className='edit-warehouse__form-label'>Email</label>
                        <input type="text" className='edit-warehouse__form-input' />
                    </div>
                </div>
                <div className='edit-warehouse__form-buttons'>
                    <button className='edit-warehouse__form-buttons--cancel'>Cancel</button>
                    <button className='edit-warehouse__form-buttons--save' type='submit' > Save</button>
                    {/* For cancel button: onClick={() => navigate('/') */}
                </div>
            </form>
        </section >
    )
}