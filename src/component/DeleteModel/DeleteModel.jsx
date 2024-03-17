"use client";
import "./DeleteModel.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import axios from "axios";

function DeleteModel({list ,setList , itemId ,listName ,itemName}) {
  const [openModal, setOpenModal] = useState(false);

console.log(itemId ,listName ,itemName)

  // handle delete button
  const handleOnClick = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}${listName}/${itemId}`
      );
      setList(
        list.filter(
          (inventory) => inventory.id !== itemId
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
            <h1 className="modal__title mb-2">
              Delete {itemName} {listName === "inventories" ? "inventory item" : "warehouse"}?
            </h1>
            <h3 className=" modal__text">
              Please confirm that you’d like to delete {itemName} from the {listName === "warehouses" ? "list of warehouses" : "inventory list"}. You won’t be able to undo this action.
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
