import { Link } from "react-router-dom"
import Navbar from "./Navbar"

function Checkout() {

    return (
        <>
            <Navbar></Navbar>
            {/* adds a border to the picture */}
            <div className=" px-60 ">
                <div className="flex justify-between border  border-box bg-gray-200 rounded-3xl h-96 mt-28">
                    {/* aligning components in column formatn */}
                    <div className=" w-96 h-96 bg-orange-300 mr-10">
                        <img src="#" alt="meal here" />
                    </div>
                    <div className="w-96 h-96 bg-green-300">
                        <h1>Burger</h1>
                        <h2>MWK2,500</h2>
                        <p>gahkdkjhaskjdhakjda kahkdahdakjhakjdah das ahskdjhskjhdakd hsdakhiuyiryiuewyruiyeiuyriue</p>
                        <button>Proceed</button>
                    </div>

                </div>
            </div>

        </>
    )
};
export default Checkout