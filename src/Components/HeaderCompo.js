import { Link } from "react-router-dom";
import { LOGO } from "./utils/constans";
import { useContext, useState } from "react"
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const HeaderCompo = () => {
 
  const {loginUser}=useContext(UserContext)
  // console.log(loginUser)
  const [Btnstate,setBtnstate] = useState("LogIn")

  const status = useOnlineStatus()

  // Subscribing the store using a selector
  const cartItems = useSelector((store)=>store.cart1.items) // cart called from store app and it managed by cartReducer -- 
                                                            //cart slice of the store is managed by cartReducer
  console.log(cartItems)
  return (
    <div className="header">
      <div className="header-logo">
        <img src={LOGO} />
      </div>

      <div className="nav-items">
        <ul className="nav-list">
        <li>Online Status : { status ? "✅" : "🟠"}</li>
          <li>
          <Link to="/"> Home </Link>
          </li>
          <li>
          {/* <Link to="/grocery"> Grocerry </Link> */}
          </li>
         
          <li>
           {/* <Link to="/About"> About Us </Link> */}
          </li>
          <li>
          {/* <Link to="/Contact">Contact Us</Link> */}
          </li>
          <li>
            <Link to={"/cart"}>Cart - ({cartItems.length} items)</Link>
          </li>
            <button className="btn2" onClick={()=>{
              Btnstate === "LogIn" ? setBtnstate("LogOut") : setBtnstate("LogIn")
            }}>{Btnstate}</button>
       <li>{loginUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderCompo;
