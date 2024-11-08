import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData?.info

    return (
        <div className="p-4 m-4 w-[250px] bg-gray-200 hover:bg-gray-300 rounded-lg">
            <img className="rounded-lg" alt="res-img" src= {CDN_URL + cloudinaryImageId} ></img>
            <h3 className="font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime + " mins"}</h4>
        </div>
    );
};

export const WithOfferLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Offers Available</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;