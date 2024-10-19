import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

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