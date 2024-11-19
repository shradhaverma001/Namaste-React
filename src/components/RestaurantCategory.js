import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // console.log("data in restaurant category", data);
    const clickHandle = () => {
        console.log("clicked");
        // setshowItems(!showItems);
        setShowIndex();
    }

    // const [showItems, setshowItems] = useState(false);

    return (
        <div>
            {/* Accordian Title */}
            <div className="w-6/12 shadow-lg p-4 m-auto">
                <div className="flex justify-between font-bold text-lg cursor-pointer" onClick={clickHandle}>
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                <div>
                    {showItems && <ItemList items = {data.itemCards} />}
                </div>
            </div>
            {/* Accordian Body */}
        </div>
    );
};

export default RestaurantCategory;