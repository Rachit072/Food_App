import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import star from '../assets/star.png'
import useRestaurant from "../utils/useRestaurant";
import { IMG } from "../config";
import { additem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import StarRating from "./Rating";
import defImage from '../assets/default_0.jpg';
import closeGif from '../assets/restaurant-close.gif';

const RestaurantDetails=()=>{
    const {id} = useParams();
    const restaurant = useRestaurant(id);
    const islogged = useSelector((store)=>store.login.isAuthenticated)
    const dispatch = useDispatch();

    const handleImageError = (event) => {
        
        event.target.src = defImage;
      };

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
            <h1 className="font-bold text-xl my-2 py-2">{restaurant?.cards[2]?.card?.card?.info?.name}</h1>
            <div className="flex">
            <p className="flex item-center font-bold my-2 bg-green-700 p-1 pl-1.5 text-white rounded w-12">
                {restaurant?.cards[2]?.card?.card?.info?.avgRating}
                <img className="p-auto m-auto h-3 w-3 " src={star} alt="star" />
            </p>
            <p className="item-center py-auto my-auto px-2 text-gray-500">{restaurant?.cards[2]?.card?.card?.info?.totalRatingsString}</p>
            </div>
            <img
                className="rounded"
                style={{ width: "280px", height: "150px", objectFit: "cover" }}
                src={IMG + restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId}
                alt="img"
            />
            <p
                style={{
                color: "grey",
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "200px",
                whiteSpace: "nowrap",
                }}
            >
            {restaurant?.cards[2]?.card?.card?.info?.cuisines?.join(", ")}
            </p>
            <div className="flex flex-col py-2">
                <p className="w-21 text-xs">
                    {restaurant?.cards[2]?.card?.card?.info?.labels[1]?.message}
                </p>            
            </div>
            <p>{restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
        </div>
        <div className="Menu">
            <h1 className="font-bold py-2">Menu</h1>
            <ul>
                {restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.length > 0 ? ( 
                    restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item) => (
                    <li className="flex space-evenly" key={item?.card?.info?.id}>
                        <div className="flex-1 py-2 pr-4 mr-8" >
                            <img className="rounded " src={IMG+item?.card?.info?.imageId} alt="" width={70} onError={handleImageError} />
                            <div className="py-2 pr-4">{item?.card?.info?.name}</div>
                            <div className="py-2 pr-4"><StarRating rating={item?.card?.info?.ratings?.aggregatedRating?.rating} votes={item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}/></div>
                        </div>
                        <div className="flex-2 pt-4 pr-8 mr-6">{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}<span> &#8377;</span></div>
                        <div className="flex-3 py-2 pr-4">
                            <button className="rounded bg-blue-100 border border-blue-700 text-blue-700 px-2 py-1 m-1"
                                onClick={() => addFoodItem(item)}
                                >Add + 
                            </button>
                        </div>
                    </li>))
                    ):(
                    <div className="flex flex-col items-center justify-center mb-8">
                        <img className="p-4 w-64 h-auto" src={closeGif} alt="Restaurant closed!!" />
                        <p className="text-lg text-gray-700 mt-4 text-center">
                            This outlet does not have an active menu currently. We are working on getting them online.
                        </p>
                    </div>
                )}
            </ul>
        </div>
        <ToastContainer />
    </div>
   ) 
}
export default RestaurantDetails;