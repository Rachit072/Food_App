import { IMG } from "../config";

export const FoodCard=({
    name,
    price,
    imageId
})=>{
    return <div className="flex justify-around items-center m-4">
        <img style={{width:"80px"}} className="rounded " src={IMG+imageId} alt="img" />
        <p>{name}</p>
        <p>{price/100}</p>
    </div>
}

