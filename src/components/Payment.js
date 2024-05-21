
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { BiSolidBank } from "react-icons/bi";

import food from "./images/burger.png";



const Payment=()=>{

    function handleSubmit(e){
        e.preventDefault();
        //handling payment submission code
    }

    return(
        <>
        <NavBar />
        {/* div supposed to be linked to previous page*/}
        <Link to="/checkout" className="">
        <p className="ml-40 mb-1.5 font-bold flex items-center">
            <MdOutlineArrowBackIos className="mr-2 h-3"/>
            Back 
        </p>
        </Link>
        <div className="flex bg-gray-100 items-center ml-40 mr-40  justify-around min-h-96  rounded-lg">
            <img
                src={food} 
                alt="payImage" 
                className="h-80  w-80 rounded-lg"
             />

            <div className="flex-column pr-1 min-w-16">
                <p className="font-bold mb-5 text-base">Choose payment method</p>

                <form   onSubmit={(e=>handleSubmit(e))}>
                    <div className="mb-3 flex items-center">
                        <input type="radio" name="pay-method" checked="true"/>
                        <BiSolidBank className="bg-black h-5 w-5 text-white ml-3 mr-2 text-sm rounded"/>
                        <label className="font-normal ml-1">
                            PayChangu
                        </label>
                    </div>
                    <hr className="font-semibold mb-2 mx-3"/>
                    <div className="mb-5 flex items-center">
                        <input type="radio" name="pay-method"/>
                        <BiSolidBank className="bg-black h-5 w-5 text-white ml-3 mr-2 rounded"/>
                        <label className="font-normal ml-1">
                            Airtel money
                        </label>
                    </div>
                    <button className="bg-orange-600 py-1 px-2 text-white mt-5 w-6/12 ">
                        Proceed
                    </button>  
                </form>
                
            </div>
        </div>
        </>
    )
}


export default Payment;