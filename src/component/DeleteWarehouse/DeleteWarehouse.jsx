import "./DeleteWarehouse.scss"
import close from "../../assets/Icons/close-24px.svg"
import axios from "axios";


//sorce: https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc

function DeleteWarehouse({ setDeleteWarehouseOpen, warehouseData, deleteWarehouseId }) {
    const baseURL = process.env.REACT_APP_BASE_URL


    const handleDeleteWarehouse = () => {
        console.log(deleteWarehouseId)
        try {
            const deleteWarehouse = async () => {
                const deleteWarehouseAPI = await axios.delete(`${baseURL}/warehouses/${deleteWarehouseId}`)
                console.log(deleteWarehouseAPI)
            }
            deleteWarehouse();
        }
        catch (error) {
            console.log("handleDeleteWarehouse error")
        }

        alert("worked")
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