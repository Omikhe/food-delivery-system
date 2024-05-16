import { Link } from "react-router-dom"
import FOODIES from "./images/FOOODIES.jpg"
function Checkout () {
    return(
        <>
        <div className="bg-white-400 rounded-3xl w-full mt-28 ml-3">
            <div className="flex-column w-fit grid grid-cols-2 w-3/4 mr-1">
                <div className="col-span-1">
                    <br/>
                    <p className="ml-5 text-3xl">Chicken</p>
                    <p className="ml-5 text-3xl">Price: MK5,400</p>
                    <p className="ml-5 text-3xl">Delivery Fee: MK1,000</p>
                    <p className="ml-5 text-3xl"></p>
                    <br></br>
                    <Link className="p-5 ml-4 border rounded-3xl border-blue-400 bg-blue-700 text-white ">PROCEED</Link>
                </div>
                
                <div className="w-3/4 col-span-1">
                    <img src={FOODIES} alt="food" className=" w-inherit  h-full rounded-3xl mt-42" width={800} height={850}/>
                </div>
                

            
            </div>
        </div>
    
        </>
    )
};
export default Checkout