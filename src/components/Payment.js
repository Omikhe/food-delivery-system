
import NavBar from "./Navbar";
import { useState } from "react";



const Payment=()=>{

    const[selectedMethod,setSelected]=useState("first");

    function handleCheckBoxClick(selected) {
        setSelected(selected);
    }

    return(
        <>
        <NavBar />
        {/* div supposed to be linked to previous page*/}
        <p className="ml-40 mb-1.5 font-bold">~ Back </p>
        <div className="flex bg-gray-100 items-center ml-40 mr-40  justify-around min-h-96">
            <img src="" alt="image" className="h-3/5 "/>
            <div className="flex-column pr-1 min-w-16">
                <p className="font-bold mb-5 text-base">Choose payment method</p>
                <form>
                    <div className="mb-2">
                        <input type="checkbox" onChange={()=>handleCheckBoxClick("first")} checked={selectedMethod==="first"}/>
                        <label className="font-normal ml-1">
                            option 1
                        </label>
                    </div>
                    <hr className="font-semibold mb-2"/>
                    <div className="mb-2">
                        <input type="checkbox" onChange={()=>handleCheckBoxClick("second")} checked={selectedMethod==="second" }/>
                        <label className="font-normal ml-1">
                            option 1
                        </label>
                    </div>
                    
                </form>
                <button className="bg-orange-500 py-1 px-2 text-white mt-5 min-w-14">
                        Proceed
                </button>
            </div>
        </div>
        </>
    )
}


export default Payment;