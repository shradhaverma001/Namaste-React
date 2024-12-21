import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const addClickHandler = () => {
        dispatch(clearCart());
    }

    return <div className="text-center m-4 p-4">
        <h1 className="font-bold m-4 p-4 text-center">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="bg-black text-white p-2 m-2 rounded-lg" onClick={() => addClickHandler()}>Clear Cart</button>
            {cartItems.length == 0 && <h2>Cart is empty. Add tasty Items to the cart!!</h2>}
            <ItemList items={cartItems}/>
        </div>
    </div>
}

export default Cart;