import { useEffect, useState,useContext } from "react";
import RestroCardsCompo, { withPromotedlabel } from "./RestroCardsCompo";
// import jsondata from "./utils/mockdata"
import { API_URL } from "./utils/constans";
import ShimmerCompo from "./ShimmerCompo";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";

const BodyCompo = () => {
  const [List, setList] = useState([]);
  const [DupList, setDupList] = useState([]);
  // console.log("List", List);
  const [txt, settxt] = useState("");

  const RestroCardPromoted = withPromotedlabel(RestroCardsCompo);

  useEffect(() => {
    console.log("useeffect trigered");
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setDupList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <div>
        {" "}
        <h1>OOP's Looks Like You're Offline!! </h1>{" "}
        <h3> Please Check you Internet Connection!!</h3>{" "}
      </div>
    );

  const { setuserInfo, loginUser } = useContext(UserContext); // refering from Usercontext
  
  return List.length === 0 ? (
    <ShimmerCompo />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          data-testid="searchInput"
          className="input-txt"
          value={txt}
          onChange={(e) => settxt(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => {
            const searcheddata = List.filter((x) =>
              x.info.name.toUpperCase().includes(txt.toUpperCase())
            );
            // setList(searcheddata)
            setDupList(searcheddata);
          }}
        >
          Search
        </button>

        <button className="btn2" onClick={()=>
        {
         const filteredlist= DupList.filter((x)=>x.info.avgRating>4.5)
         setDupList(filteredlist)
        }
           

        }>Top Restro</button>
        <input
          type="text"
          value={loginUser}
          onChange={(e) => setuserInfo(e.target.value)}
        />
      </div>

      <div className="RestroCards-Container">
        {DupList.map((x) => (
          <Link key={x.info.id} to={"/Restro/" + x.info.id}>
            {
              /* if the restro is promoted then add a promoted label */
              x.info.isOpen === true ? (
                <RestroCardPromoted CardsData={x} />
              ) : (
                <RestroCardsCompo CardsData={x} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};
export default BodyCompo;
