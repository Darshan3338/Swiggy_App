import { useContext } from "react";
import { CDN_URL } from "./utils/constans";
import UserContext from "./utils/UserContext";

const RestroCardsCompo = (p) => {
  const {loginUser}=useContext(UserContext)
 const {CardsData}=p
//  console.log("Cards data",CardsData)
 const {name,cuisines,sla,costForTwo,avgRating,cloudinaryImageId}=CardsData?.info
  return (
    <div data-testid="resCard" className="Restro-cards">
      <img src={CDN_URL + cloudinaryImageId} className="Restro-img" />

      <div className="restro-text">
             <h2>{name}</h2>
             <h4>{cuisines.join(", ")}</h4>
             <h4>{sla.deliveryTime} Minutes</h4>
             <h5>{costForTwo}</h5> 
             <h3>{avgRating} Stars</h3> 
             <h4>User : {loginUser}</h4>
      </div>
    </div>
  );
};

//Higher Order Component

//input - RestroCardComp ==> withPromotedlabel

export const withPromotedlabel = (RestroCardComp)=>{
  return(p)=>{
    return(
      <div>
        <label className="promoted">promoted</label>
        <RestroCardComp {...p}/>
      </div>
    )
  }

}

export default RestroCardsCompo;

//update url post method for ore swiggy imgs
