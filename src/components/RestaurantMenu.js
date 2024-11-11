import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null){
        return <Shimmer />
    }

    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
    // console.log(name);

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // console.log("menu items category wise", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);    

    return (
        <div className="m-2 p-2 text-center">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h4 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h4>
            <p className="font-bold">Ratings⭐ - {avgRating}</p>
            <div className="items">
                {categories.map((category) => (<RestaurantCategory data = {category?.card?.card}/>))}
                {/* <ul>
                    {itemCards.map((item) => (
                        <li key = {item.card.info.id}>
                            {item.card.info.name} - Rs. 
                            {item.card.info.defaultPrice / 100 || item.card.info.price / 100} 
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    );
};

export default RestaurantMenu;