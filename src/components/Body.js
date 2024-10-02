import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react"; 

const Body = () => {

  // State variable using hooks
    let [listOfRestaurants, setlistOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await(data.json());
        console.log(json);
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

//   // Normal JS Variable
//   let listOfRestaurants = [
//     {
//         "info": {
//         "id": "498382",
//         "name": "Burger King",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/64339639-9425-4d7a-807f-6fca82056ec3_498382.jpg",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Burgers",
//           "American"
//         ],
//         "avgRating": 4.5,
//         "sla": {
//           "deliveryTime": 19,
//         },
//       }
//     },
//     {
//         "info": {
//         "id": "373272",
//         "name": "Kwality Walls Ice Cream and More",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/e355aa6b-bc56-4d39-ac2b-a657033916c2_373272.JPG",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "Desserts",
//           "Ice Cream",
//           "Ice Cream Cakes"
//         ],
//         "avgRating": 3.9,
//         "sla": {
//           "deliveryTime": 21,
//         },
//       }
//     },
//     {
//         "info": {
//         "id": "326440",
//         "name": "Punjabi Angithi (Vegorama Group)",
//         "cloudinaryImageId": "g2pklvjnapzfoc4ackou",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "North Indian",
//           "Chinese",
//           "Tandoor"
//         ],
//         "avgRating": 4.3,
//         "sla": {
//           "deliveryTime": 38,
//         },
//       }
//     },
// ];

    if(listOfRestaurants.length === 0){
        return <h1>Loading....</h1>
    }

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setlistOfRestaurants(filteredList);
                    }
            }
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;