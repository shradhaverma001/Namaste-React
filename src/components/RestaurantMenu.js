import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    // console.log(params);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        // const data = await fetch(MENU_URL + resId);
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId="+resId
        );
        console.log("api called");
        const json = await(data.json());
        console.log(json);

        setResInfo(json?.data);
    };

    if(resInfo === null){
        return <Shimmer />
    }

    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
    console.log(name);

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
            <p>Ratings⭐ - {avgRating}</p>
            <div className="items">
                <h1>Menu</h1>
                <ul>
                    {itemCards.map((item) => (
                        <li key = {item.card.info.id}>
                            {item.card.info.name} - Rs. 
                            {item.card.info.defaultPrice / 100 || item.card.info.price / 100} 
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;