import React from 'react';
import Navbar from './Navbar';
import img from './images/img.png';

//helper function for the open/close sign
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
        <div className="w-1/3 ml-5 bg-gray-900 text text-white p-10 text-xl rounded-lg">


            <div className="flex mb-5">
                <div className="w-28 h-28 rounded-lg">
            <img src={img} alt="restaurant logo" />

                </div>
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



function Message() {

    return <>
        <h1 className="flex h-10 pl-60 pr-60 pt-20 pb-20 text-bold text-2xl">Choose your restaurant</h1>

    </>;
}
function Restaurants() {
    return <>
        <Navbar></Navbar>
        <Message />
        <div className="flex h-full pl-60 pr-60 pt-5 justify-around">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
        <div className="flex h-full pl-60 pr-60 pt-5 pb-20 justify-around">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    </>;
}

export default Restaurants;