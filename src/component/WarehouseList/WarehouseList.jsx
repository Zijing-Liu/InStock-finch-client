import "./WarehouseList.scss";
import searchLogo from "../../assets/Icons/search-24px.svg";
import deleteBtn from "../../assets/Icons/delete_outline-24px.svg"
import editBtn from "../../assets/Icons/edit-24px.svg"
import chevron from "../../assets/Icons/chevron_right-24px.svg"

function WarehouseList() {
    return (
        <section className="list">
            <div className="list__main-container">
                <h1>Warehouses</h1>
                <div className="list__search-container">
                    <input className="list__search" type="text" name="search-bar" placeholder="Search..."></input>
                    <button className="list__search-btn">
                        <img src={searchLogo} className="list__search-img"/>
                    </button>
                </div>
                <button className="list__btn">+Add New Warehouse</button>
            </div>
            <div className="list__warehouse-container">
                <div>
                <h2>Warehouse</h2>
                {/* Link/navigate to warehouseDetails */}
                <p>Test Warehouse <img src={chevron}/></p>
                <h2>Address</h2>
                <p>123 street, Test City, Canada</p>
                <img src={deleteBtn} />
                </div>
                <div>
                <h2>Contact Name</h2>
                <p>John Doe</p>
                <h2>Contact Information</h2>
                <p>123-456-7890 abc@test.xyz</p>
                <img src={editBtn} alt="" />
                </div>
            </div>
        </section>
    )
}

//        {warehouseListData.Map((warehouse)=> {
//     return(
//         <div key={warehouse.id}>
//             <h2>Warehouse</h2>
//             {/* Link/navigate to warehouseDetails */}
//             <p>{warehouse.name}</p>
//             <h2>Address</h2>
//             <p>{warehouse.address} {warehouse.city} {warehouse.country}</p>
//             <h2>Contact Name</h2>
//             <p>{warehouse.contact_name}</p>
//             <h2>Contact Information</h2>
//             <p>{warehouse.contact_phone} {warehouse.contact_email}</p>
//         </div>
//     )}
// )}

export default WarehouseList;