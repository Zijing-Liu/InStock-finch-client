import "./WarehouseList.scss";
import SearchLogo from "../../assets/Icons/search-24px.svg"

function WarehouseList(){
return(
    <section>
        <div>
            <h1>Warehouses</h1>
            <div>
            <input className="" type="text" name="search-bar" placeholder="Search"></input>
            <button>
                <img src={SearchLogo} />
            </button>
            </div>
            <button>+Add a New Warehouse</button>
        </div>
        {warehouseListData.Map((warehouse)=> {
            return(
                <div key={warehouse.id}>
                    <h2>Warehouse</h2>
                    {/* Link/navigate to warehouseDetails */}
                    <p>{warehouse.name}</p>
                    <h2>Address</h2>
                    <p>{warehouse.address} {warehouse.city} {warehouse.country}</p>
                    <h2>Contact Name</h2>
                    <p>{warehouse.contact_name}</p>
                    <h2>Contact Information</h2>
                    <p>{warehouse.contact_phone} {warehouse.contact_email}</p>
                </div>
            )}
        )}
    </section>
)
}

export default WarehouseInventory;