import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";

function MenuCard() {
  return (
    <>
      <div className="w-40">
        <li className=" flex justify-start bg-slate-200 rounded-2xl">
          <div className=" flex flex-col p-4 items">
            <img
              className="p-3 "
              src="logo192.png"
              alt="Nsima with chisoso"
            />
            <h2 className="font-bold text-center ">Nsima & chisoso</h2>
            <p className="text-center">k3500</p>
            <div className="">
              <Link to="/Checkout" >
                <button className=" w-full p-1 pl-6 pr-6 bg-orange-600 text-white rounded-md">
                  order
                </button>
              </Link>
            </div>
          </div>
        </li>
      </div>
    </>
  );
}

function Menu() {
  return (
    <>
      <Navbar></Navbar>
      <div className=" ml-20 mr-20">
        <div className="flex gap-10">
          <div className="w-60">
            <img src="logo192.png" alt="Bosssman" />
          </div>
          <div>
            <h1 className="text-[45px] font-bold">Bossman Restaurant</h1>
            <div className="flex gap-3">
              <p>Chikanda</p>
              <p>Near Bridge</p>
            </div>
            <p className=" text-green-600">Open</p>
          </div>
        </div>

        <div className="m-6">
          <h1 className=" text-[50px] mb-6">Check out our menu!</h1>
          <hr className=" border border-black"></hr>
        </div>
        <MenuCard></MenuCard>
      </div>
    </>
  );
}

export default Menu;


