import { useEffect, useState } from "react";
import { quickMart_api } from "../config";
import data from '../utils/data.json';
import QuickMartCard from "./QuickMartCard";
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom';

const Section=({title,description,isVisible,setIsVisible})=>{
    
    return (<div className="border border-black p-3 m-3">
        <h3>{title}</h3>
        {
            !isVisible ? <button className="font-bold hover:text-blue-700" onClick={()=>setIsVisible(true)}>Show</button>
            :<button className="font-bold hover:text-blue-700" onClick={()=>setIsVisible(false)}>Hide</button>
        }
        {isVisible && <p>{description}</p>}
    </div>)
}

function QuickMart(){
    const [groceryItems,setGroceryItems] = useState([])
    const [visibleSection,setVisibleSection]=useState(null);

    useEffect(()=>{
        fetchQuick();
    },[]);

    const fetchQuick= ()=>{
        try {
            setGroceryItems(data?.data?.widgets[2]?.data || data?.data?.widgets[1]?.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    return !groceryItems || groceryItems.length === 0 ? (<Shimmer/>
    ) : (<>
        <h1 className="font-bold p-2 m-2 text-3xl" style={{color:'#53bced'}}>QuickMart <span> - Coming Soon</span></h1>
        <div className="font-bold p-4 text-left ml-20 text-lg" >Shop by category</div>
        <div className="flex">
            <div className="mx-auto grid grid-cols-7 gap-4">
                {groceryItems && groceryItems.map((item,index) => {
                    return (<Link to=''  key={item?.nodeId || index}>
                        <QuickMartCard {...item} />
                    </Link> 
                    );
                })}
            </div>
        </div>
        <Section
        title={"About QuickMart"}
        description={"QuickMart is your go-to destination for swift and convenient shopping experiences. As the name suggests, we prioritize speed without compromising on quality. Imagine a world where your grocery and everyday essentials are just a click away, and they arrive at your doorstep in no time. At QuickMart, we understand the pace of modern life, and we're here to make your shopping as fast and hassle-free as possible. With a curated selection of high-quality products, ranging from fresh produce to household necessities, we aim to simplify your daily routines."}
        isVisible={visibleSection=="about"}
        setIsVisible={()=>setVisibleSection(visibleSection=="about"? null:"about")}
        />
        <Section
        title={"Team QuickMart"}
        description={"Our dedicated team works tirelessly to ensure that your orders are processed swiftly and reach you at the earliest convenience. Say goodbye to long waits and hello to quick deliveries."}
        isVisible={visibleSection=="team"}
        setIsVisible={()=>setVisibleSection(visibleSection=="team"?null:"team")}/>
        <Section
        title={"Products"}
        description={"Aliquam tincidunt mauris eu risus Vestibulum auctor dapibus neque Nunc dignissim risus id metus. Cras ornare tristique elit. Vivamus vestibulum ntulla nec ante. Praesent placerat risus quis eros"}
        isVisible={visibleSection=="products"}
        setIsVisible={()=>setVisibleSection(visibleSection=='products'?null:"products")}
        />
    </>)
}
export default QuickMart;