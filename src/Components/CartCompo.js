import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "./utils/cartSlice"

const CartCompo = () =>{
    const cartItems=useSelector((store)=>store.cart1.items)

    const dispatch=useDispatch()
    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    return(
            <div className="cart">
               <h1>Cart</h1> 

           { cartItems.length !==0 &&   <button className="cart-btn" onClick={handleClearCart}>Clear</button>}
            
               <ItemList items={cartItems}/>
               {cartItems.length===0 && <h1>Cart is Empty Add Items</h1>
               
               }

            </div>
    )
}

export default CartCompo