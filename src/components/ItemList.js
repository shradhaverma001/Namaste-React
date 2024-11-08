import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    console.log("items names", items);
    // console.log(items);

    return (

            <div className="text-left p-4">
                {items.map(i => (
                    <div key = {i.card.info.id} className="flex justify-between py-4 border-b-4">
                        <div className="w-9/12">
                            <div className="font-bold text-sm py-2">{i.card.info.name} - ₹{i.card.info.price/100 || i.card.info.defaultPrice/100}</div>
                            <p className="text-xs">{i.card.info.description}</p>
                        </div>
                        <div className="w-3/12">
                            <img src= {CDN_URL + i.card.info.imageId}></img>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default ItemList;