import { useDispatch, useSelector } from "react-redux/es/exports";
import { clearCart } from "../utils/cartSlice";
import {FoodCard} from "./FoodCard";

const Cart =()=>{

    const dispatch=useDispatch()
    const cartItems = useSelector(store => store.cart.items)
    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return <div>
        <h1 className="font-bold p-2 m-2">Your Cart - {cartItems.length}</h1>
        <button className="bg-red-100 text-red-700 border border-red-700 rounded px-2 m-4" 
            onClick={()=>handleClearCart()}>Clear Cart
        </button>
        {cartItems.map(item=>
            <FoodCard key={item?.card?.info?.id} {...item?.card?.info}/>
    )}
    </div>
}
export default Cart;