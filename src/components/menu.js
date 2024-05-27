import React from "react";
import restaurantsData from './Restaurants.json';
import { OpenClose } from "./Restaurants";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function RestaurantDetails({ logo, name, location }) {
  return (
    <div className="flex items-center gap-10 mt-10">
      <div className="w-40 h-40 rounded-3xl overflow-hidden bg-black">
        <img src={require(`${logo}`)} alt="Restaurant Logo" />
      </div>
      <div>
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p>{location}</p>
          <div className="flex items-center">
            <OpenClose />
          </div>
        </div>
      </div>
    </div>
  );
}

function CallToAction() {
  return (
    <div className="mt-20 mb-7">
      <h1 className="text-5xl font-bold mb-4">Checkout our menu!</h1>
      <hr className="border bg-gray-500"></hr>
    </div>
  );
}

function MenuItem({ image, name, price, description }) {
  return (
    <div className="flex flex-col w-64 h-80 mr-8 p-6 justify-between items-center bg-gray-200 text-black text-xl rounded-2xl">
      <div className="w-full h-full rounded-3xl p-0 mb-1 overflow-hidden bg-transparent">
        <img src={require(`${image}`)} alt={name} className="w-full h-full  object-cover" />
      </div>
      <div className="flex flex-col items-center mb-2 mt-0">
        <h2 className="font-bold text-base">{name}</h2>
        <p className="text-center">{price}</p>
      </div>
      <Link to="/Checkout" state={{ name: name, image: image, price: price, description: description }} className="w-full">
        <button className="w-full p-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md">
          Order
        </button>
      </Link>
    </div>
  );
}

function Menu() {
  const location = useLocation();
  const selectedRestaurant = location.state?.menu
    ? restaurantsData.find((restaurant) => restaurant.name === location.state.name)
    : null;

  // Render the component only if a restaurant is selected
  if (!selectedRestaurant) {
    return (
      <>
        <Navbar />
        <div className="h-10 pl-60 pr-60 pt-5 pb-20 text-bold text-center text-5xl font-bold">
          Please select a restaurant to view the menu.
        </div>
      </>
    );
  }

  const renderMenuItems = () => {
    const menuItemRows = [];
    const numRows = Math.ceil(selectedRestaurant.Menu.length / 5);

    for (let i = 0; i < numRows; i++) {
      const rowMenuItems = selectedRestaurant.Menu.slice(i * 5, i * 5 + 5).map((item, index) => (
        <MenuItem
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
          description={item.description}
          logo={item.logo}
          location={item.location}
        />
      ));

      menuItemRows.push(
        <div key={i} className="flex px-60 mb-8">
          {rowMenuItems}
        </div>
      );
    }

    return menuItemRows;
  };

  return (
    <>
      <Navbar />
      <div className="px-60">
        <RestaurantDetails
          logo={selectedRestaurant.logo}
          name={selectedRestaurant.name}
          location={selectedRestaurant.location}
        />
        <CallToAction />
      </div>

      {renderMenuItems()}
    </>
  );
}

export default Menu;