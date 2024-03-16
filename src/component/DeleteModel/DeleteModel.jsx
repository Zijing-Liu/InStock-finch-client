"use client";
import "./DeleteModel.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

function DeleteModel({ Allinventories, inventoryTodelete ,setIinventories }) {
  const [openModal, setOpenModal] = useState(false);

  // this should be added in the inventory page 
  // const [inventories, setIinventories] = useState(Allinventories);

  // handle delete button
  const handleOnClick = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}in/${inventoryTodelete.id}`
      );
      setIinventories(
        Allinventories.filter(
          (inventory) => inventory.id !== inventoryTodelete.id
        )
      );
      setOpenModal(false);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return (
    <>
      <img
        src={deleteIcon}
        alt="delete-icon"
        onClick={() => setOpenModal(true)}
      />
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-start">
            <h1 className="modal__title mb-1">
              Delete Television inventory item?
            </h1>
            <h3 className=" modal__text">
              Please confirm that you’d like to delete{inventoryTodelete.item_name} from
              the inventory list. You won’t be able to undo this action.
            </h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-center btn-box gap-2">
            <Button
              className="modal__btn modal__btn--white"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </Button>
            <Button className="modal__btn" onClick={handleOnClick}>
              Delete
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModel;
