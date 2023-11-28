import { IMG } from "../config";

export const FoodCard=({
    name,
    price,
    imageId,
})=>{
    return <div className="flex justify-around items-center m-4">
        <img style={{width:"100px",height:"60px"}} className="rounded " src={IMG+imageId} alt="img" />
        <p style={{width:"200px"}}>{name}</p>
        <p>{price/100}</p>
    </div>
}

