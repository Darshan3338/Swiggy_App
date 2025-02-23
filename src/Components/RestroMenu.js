import ShimmerCompo from "./ShimmerCompo";
import { useParams } from "react-router-dom";
import useRestroMenu from "./utils/useRestroMenu";
import ResCategories from "./ResCategories";
import { useState } from "react";

const RestroMenu = () => {

  
  const [showIndex,setshowIndex]=useState(null)
  const { resId } = useParams();

  const MenuList = useRestroMenu(resId);

  if (MenuList === null) return <ShimmerCompo />;

  const { name, costForTwoMessage, cuisines } =
    MenuList?.data?.cards[2]?.card?.card?.info;

  // console.log("Menulist", MenuList?.data);

  const Categories =
    MenuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (x) =>
        x.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("@type=", Categories);
  return (
    <div className="menu">
      <h3>{name}</h3>
      <h4>
        {cuisines} - {costForTwoMessage}
      </h4>
      <h3>Menu</h3>

      {/* Categories accordions*/}
      {Categories.map((Category,index) => (
        //controlled Component
        <ResCategories 
          key={Category?.card?.card?.info?.id}
          data={Category?.card?.card}
          showItems={index === showIndex ? true : false }
          setshowIndex={()=>setshowIndex(index === showIndex ? null : index)}
          // If showIndex is already the clicked category's index, set showIndex to null (collapse it).
          // Otherwise, set showIndex to index (expand it).
        />
      ))}
    </div>
  );
};

export default RestroMenu;
