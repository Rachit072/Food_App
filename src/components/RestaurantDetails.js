import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import star from '../assets/star.png'
import useRestaurant from "../utils/useRestaurant";
import { IMG } from "../config";
import { additem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RestaurantDetails=()=>{
    const {id} = useParams();
    const restaurant = useRestaurant(id);
    const islogged = useSelector((store)=>store.login.isAuthenticated)
    const dispatch = useDispatch();

    const addFoodItem=(item)=>{
        if (islogged) {
            dispatch(additem(item));
          } else {
            toast.error("Please Login First!", {
                position: "top-right",
                autoClose: 3000, 
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }
    return (!restaurant)?
    (<Shimmer/>)
    :(
    <div className="MenuContainer">
        <div>
            {/* <h1> Restaurant Id : {id}</h1> */}
            <h1 className="font-bold my-2 py-2">{restaurant?.cards[0]?.card?.card?.info?.name}</h1>
            <img
                className="rounded"
                style={{ width: "280px", height: "150px", objectFit: "cover" }}
                src={IMG + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId}
                alt="img"
            />
            <p className="flex item-center">
                {restaurant?.cards[0]?.card?.card?.info?.avgRating}
                <img className="ml-1 h-5 w-4 pt-1" src={star} alt="star" />
            </p>
            <p
                style={{
                color: "grey",
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "200px",
                whiteSpace: "nowrap",
                }}
            >
            {restaurant?.cards[0]?.card?.card?.info?.cuisines?.join(", ")}
            </p>
            <p>{restaurant?.cards[0]?.card?.card?.info?.locality}</p>
        </div>
        <div className="Menu">
            <h1 className="font-bold">Menu</h1>
            <ul>
                {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item) => (
                    <li className="flex" key={item?.card?.info?.id}>
                      <div className="flex-1 py-2 pr-4">{item?.card?.info?.name}</div>
                      <button
                        className="flex-2 rounded bg-blue-100 border border-blue-700 text-blue-700 px-2 py-1 m-1"
                        onClick={() => addFoodItem(item)}
                      >Add + 
                      </button>
                    </li>
                ))}
            </ul>
        </div>
        <ToastContainer />
    </div>
   ) 
}
export default RestaurantDetails;