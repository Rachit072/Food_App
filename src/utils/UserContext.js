import { createContext } from "react";

const UserContext = createContext({
    user:{
    name:"Rachit",
    email:"Rachit@devs.in",
    }
})
export default UserContext;