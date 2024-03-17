import "./DeleteWarehouse.scss"
import {useNavigate} from "react-router-dom"
import close from "../../assets/Icons/close-24px.svg"
import axios from "axios";


//sorce: https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc

function DeleteWarehouse({ setDeleteWarehouseOpen, warehouseData, deleteWarehouseId, setDeleteWarehouse }) {
    const baseURL = process.env.REACT_APP_BASE_URL
    let navigate = useNavigate()

    const handleDeleteWarehouse = () => {
        try {
            const deleteWarehouse = async () => {
                const deleteWarehouseAPI = await axios.delete(`${baseURL}warehouses/${deleteWarehouseId}`)
                setDeleteWarehouse(deleteWarehouseAPI)
            }
            deleteWarehouse();
            setDeleteWarehouseOpen(false)
        }
        catch (error) {
            console.log("handleDeleteWarehouse error")
        }
    }

    return (
        <div className="background">
            <div className="modal__container">
                <button className="modal__close" onClick={() => setDeleteWarehouseOpen(false)}><img src={close} /></button>
                <h2>delete {warehouseData.name} warehouse?</h2>
                <p>Please confirm that you'd like to delete the {warehouseData.name} from the list for warehouses you won't be able to undo this action. </p>
                <div className="modal__btns-container">
                    <button className="modal__btn modal__btn--cancel" onClick={() => setDeleteWarehouseOpen(false)}>
                        Cancel
                    </button>
                    <button className="modal__btn modal__btn--delete" onClick={handleDeleteWarehouse}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteWarehouse;