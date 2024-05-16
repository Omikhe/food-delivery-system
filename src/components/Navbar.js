import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navbar() {
    return <>
        <div class="flex w-full justify-between" >

</div>
 <div className="flex w-full justify-between items-center w-full">
                <Link to="/">
                    <img src="src/components/images/logo.svg" alt="FDS Logo" />
                </Link>
<div class=" flex justify-center ml-2 mr-2 mt-2">
                    <ul className="flex w-full justify-between font-normal">
                        <li className="p-5 hover:text-blue-500"><Link to="/Home">Restaurants</Link></li>
                        <li className="p-5 hover:text-blue-500"><Link to="/Restaurants">Option 1</Link></li>
                        <li className="p-5 hover:text-blue-500"><Link to="#">Option 2</Link></li>
                         <li className="p-5 hover:text-blue-500"><Link to="#"> More </Link></li>  
                    </ul>
                        <button className="w-48 border-2 border-gray-800 text-xl text-white ml-5 bg-gray-600 rounded-lg hover:bg-white hover:text-gray-600">Sign Up</button>
                        <button className="w-48 border-2 border-gray-800 text-xl text-white ml-5 bg-gray-600 rounded-lg hover:bg-white hover:text-gray-600">Learn More</button>
</div>

</div>
    </>;
}

export default Navbar;