import { useState } from "react";

const Contact=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-bold text-red-700 mb-4">Contact Us</h1>
            <div>
                <form action="" className="flex flex-col max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
                    <div className="flex-1 block">
                        <label htmlFor="name" className="text-gray-600 text-sm font-medium mb-2">Name</label>
                        <div>
                            <input 
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name "
                            required />
                        </div>
                    </div>
                    <div className="flex-2">
                        <label htmlFor="name" className="text-gray-600 text-sm font-medium mb-2">Email</label>
                        <div>
                            <input 
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            type="text" id="name" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Name " />
                        </div>
                    </div>
                    <div className="flex-3">
                        <button 
                        className="w-full my-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                        type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Contact;