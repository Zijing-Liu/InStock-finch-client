import WarehouseForm from "../../component/WarehouseForm/WarehouseForm";


export default function EditWarehouse() {

  const formDetails = {
    title: "Edit Warehouse",

    button: "Save",
  }

  // GET details for specific warehouse and display in form
  // then, PUT any changes 


  return (
    <WarehouseForm formDetails={formDetails} />
  )
}