import "./DeleteWarehouse.scss"
import close from "../../assets/Icons/close-24px.svg"
import React, {Modal} from "react"

function DeleteWarehouse({onClose}) {
    function closeFunction() {
        alert("you've been closed")
    }
    return (
        <div className="modal">
            <div className="modal__container">
                <Modal onClose={closeFunction}>
                <button><img src={close}/></button>
                <p>Text</p>
                <p>More text</p>
                </Modal>
            </div>
        </div>
    )
}

export default DeleteWarehouse;