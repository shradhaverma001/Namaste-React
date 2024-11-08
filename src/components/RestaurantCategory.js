import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    // console.log(data);
    return (
        <div>
            {/* Accordian Title */}
            <div className="w-6/12 shadow-lg p-4 m-auto">
                <div className="flex justify-between font-bold text-lg">
                    <span>{data.title}</span>
                    <span>🔽</span>
                </div>
                <div>
                    <ItemList items = {data.itemCards} />
                </div>
            </div>
            {/* Accordian Body */}
        </div>
    );
};

export default RestaurantCategory;