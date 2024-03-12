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
                <div></div>
            )
        })}
    </section>
)
}

export default WarehouseInventory;