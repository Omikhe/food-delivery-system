import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function nthawi() {
    const currentTime = new Date(); // Get the current time
    const currentHour = currentTime.getHours(); // Get the current hour (0-23)
    const currentMinute = currentTime.getMinutes(); // Get the current minute (0-59)

    let open_close; // Declare the variable

    // Convert 7:30 AM and 4:30 PM to their respective hour and minute values
    const openingHour = 7;
    const openingMinute = 30;
    const closingHour = 16;
    const closingMinute = 30;

    // Check if the current time is between 7:30 AM and 4:30 PM
    if (
        (currentHour > openingHour || (currentHour === openingHour && currentMinute >= openingMinute)) &&
        (currentHour < closingHour || (currentHour === closingHour && currentMinute < closingMinute))
    ) {
        open_close = 'Open'; // Set the variable to 'open'
    } else {
        open_close = 'Close'; // Set the variable to 'close'
    }

    return open_close;
}

function RestaurantCard() {
    let open_close = nthawi();
    return <>
        <div className="ml-10 w-1/3 bg-gray-900 text text-white p-10 text-xl rounded-lg">
            {/* <img src="/home/omikhe/Documents/INF221/group-project/food-delivery-system-UI/img.png" alt="" /> */}


            <div className="flex mb-5">
                <div className="w-28 h-28 bg-black rounded-lg"></div>
                <div className="ml-5">
                <h1 className="font-semibold mb-3">Bossman Restaurant</h1>
                <h2 className="mb-3 text-sm">Chikanda - Near Bridge</h2>
                    <div className="flex items-center text-sm">
                        <div className="w-3 h-3 rounded-full bg-green-700 mr-1"></div>
                        <h2>{open_close}</h2>
                    </div>
                </div>
            </div>
            <button className="w-full border-white p-4 text-black bg-gray-400 rounded-lg">View Menu</button>
        </div>
    </>;
}

function NavBar() {
    return <>
        <div className="flex h-10 pl-60 pr-60 pt-20 pb-20 items-center justify-center text-xl font-sans font-medium" >
            <nav className="flex w-full justify-between items-center">
                <Link to="/">
                    <img src="src/components/images/logo.svg" alt="FDS Logo" />
                </Link>
                <div className="flex w-90 items-center justify-between">

                    <ul className="flex w-1/3 justify-between">
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

function Message() {

    return <>
        <h1 className="flex h-10 pl-60 pr-60 pt-20 pb-20 text-bold text-xl">Choose your restaurant</h1>

    </>;
}
function Restaurants() {
    return <>
        <NavBar></NavBar>
        <Message />
        <div className="flex">
            <RestaurantCard />
            {/* <RestaurantCard />
            <RestaurantCard /> */}
        </div>
    </>;
}

export default Restaurants;