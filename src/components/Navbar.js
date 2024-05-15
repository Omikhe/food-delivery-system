import { Link } from 'react-router-dom';
import logo from './images/logo.svg';

function Navbar() {
    return <>
        <div className="flex h-10 pl-60 pr-60 pt-20 pb-20 items-center justify-center font-sans font-medium text-xl" >
            <nav className="flex w-full justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="FDS Logo" />
                </Link>
                <div className="flex w-90 items-center justify-between">

                    <ul className="flex w-1/3 justify-between font-normal">
                        <li className="p-5"><Link to="/Home">Home</Link></li>
                        <li className="p-5"><Link to="/Restaurants">Restaurants</Link></li>
                        <li className="p-5"><Link to="#">About</Link></li>
                    </ul>
                    <div className="ml-5">
                        <button className="px-5 py-2.5 border-2 border-gray-800 text-xl text-black ml-5 bg-transparent rounded-lg">Sign Up</button>
                        <button className="px-5 py-2.5 border-2 border-gray-800 text-xl text-white ml-5 bg-gray-900 rounded-lg">Log In</button>
                    </div>
                </div>
            </nav>
        </div>
    </>;
}

export default Navbar;