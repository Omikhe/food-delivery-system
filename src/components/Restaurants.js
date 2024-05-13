import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function RestaurantCard(){
    let open_close = "open";
    return<>
    <div>
        <img src="/home/omikhe/Documents/INF221/group-project/food-delivery-system-UI/img.png"/>
        <h1>Bossman Restaurant</h1>
        <h2>Chikanda - Near Bridge</h2>
        <h2><div>-</div>{open_close}</h2>
        <button>View Menu</button>
    </div>
    </>;
}

function NavBar(){
    return <>
    <nav>
        <Link to="/">
        <img src="/home/omikhe/Documents/INF221/group-project/food-delivery-system-UI/logo.svg" alt="FDS Logo"/>
        </Link>
        <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Restaurants">Restaurants</Link></li>
            <li><Link to="#">About</Link></li>
        </ul>
        <button>Sign Up</button>
        <button>Log In</button>
    </nav>
    </>;
}
function Restaurants(){
    return <>
    <NavBar></NavBar>
    <h1>Choose your restaurant</h1>
    <RestaurantCard/>
    </>;
}

export default Restaurants;