import WarehouseForm from "../../component/WarehouseForm/WarehouseForm";


export default function EditWarehouse() {

  // GET details for specific warehouse and display in form, passed
  // as props. For example, if the state is called
  // selectedWarehouse, this will send id and from there, I need to 
  // retrieve all data and display in the appropriate fields


  const formDetails = {
    title: "Edit Warehouse",

    button: "Save",
  }

  // PUT request 


  return (
    <WarehouseForm formDetails={formDetails} />
  )
}