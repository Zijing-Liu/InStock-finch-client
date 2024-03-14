import "./DeleteWarehouse.scss"
import close from "../../assets/Icons/close-24px.svg"
import React, { Modal } from "react"

//sorce: https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc

function DeleteWarehouse({ setDeleteWarehouseOpen, warehouseObj }) {

    return (
        <div className="background" 
        // onClick={() => setDeleteWarehouseOpen(false)}
        >
            <div className="modal__container">
                <button className="modal__close" onClick={() => setDeleteWarehouseOpen(false)}><img src={close} /></button>
                <h2>delete {warehouseObj.id} warehouse?</h2>
                <p>Please confirm that you'd like to delete the {warehouseObj.id} from the list for warehouses you won't be able to undo this action. </p>
                <div className="modal__btns-container">
                <button className="modal__btn modal__btn--cancel">
                        Delete
                    </button>
                    <button className="modal__btn modal__btn--delete">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteWarehouse;