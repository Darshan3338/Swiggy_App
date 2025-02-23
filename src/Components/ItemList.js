import { useDispatch } from "react-redux";
import { CDN_URL } from "./utils/constans";
import { addItem } from "./utils/cartSlice";
import RestroMenu from "./RestroMenu";
import CartCompo from "./CartCompo";

const ItemList = ({ items }) => {
  // console.log("ItemList", items);


  const dispatch = useDispatch()
  const handleAddItem=(items)=>{
    // Dispatch an action
    dispatch(addItem(items))

  }
  return (
    <div>
      {items.map((items) => (
        <div data-testid="foodItems"
          key={items?.card?.info?.id}
          style={{
            textAlign: "left",
            borderBottom: "2px solid black",
            margin: "10px",
            padding: "10px",
            display:"flex",
            justifyContent:"space-between"
          }}
        >
          

          <div style={{width:"80%"}}>
          <div style={{ fontWeight: "bold" }}>
            {items?.card?.info?.name}
            <span
              style={{ display: "block", fontSize: "13px", padding: "5px" }}
            >
              ₹
              {items?.card?.info?.price
                ? items?.card?.info?.price / 100
                : items?.card?.info?.defaultPrice / 100}
            </span>
            
          </div>
          <p style={{ fontSize: "12px" }}>{items?.card?.info?.description}</p>
        </div>
        <div style={{width:"20%"}}>
        <div className="List-Add">

        <button onClick={()=>handleAddItem(items)} style={{cursor:"pointer"}}> Add + </button> 
        </div>
          <img src={CDN_URL + items?.card?.info?.imageId} style={{width:"100px",height:"90px",margin:"5px",border:"2px solid black",borderRadius:"10px"}}/>
          </div>
        </div>
        
      ))}
    </div>
  );
};
export default ItemList;
