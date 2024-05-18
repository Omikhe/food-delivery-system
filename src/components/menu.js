import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";

function Menu() {
  return (
    <div className=" ml-6 mr-6">
      <div className="flex gap-10">
        <img src="logo192.png" alt="Bosssman" />
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

      <div className="flex flex-col items-center gap-6">
        <ul className="flex gap-12 justify-around">
          <li className="bg-slate-200 border rounded-2xl p-3">
            <Link to="/" className=" flex flex-col items-center">
              <img src="logo192.png" alt="Nsima with chisoso" />
              <h2>Nsima & chisoso</h2>
              <p>k3500</p>
              <button className=" p-3 pl-6 pr-6 bg-orange-600 rounded-md">
                order
              </button>
            </Link>
          </li>
          <li className="bg-slate-200 border rounded-2xl p-3">
            <Link to="/" className=" flex flex-col items-center">
              <img src="logo192.png" alt="Nsima with chisoso" />
              <h2>Nsima & Chisoso</h2>
              <p>k3500</p>
              <button className=" p-3 pl-6 pr-6 bg-orange-600 rounded-md">
                order
              </button>
            </Link>
          </li>
          <li className="bg-slate-200 border rounded-2xl p-3">
            <Link to="/" className=" flex flex-col items-center">
              <img src="logo192.png" alt="Nsima with chisoso" />
              <h2>Nsima & Chisoso</h2>
              <p>k3500</p>
              <button className=" p-3 pl-6 pr-6 bg-orange-600 rounded-md">
                order
              </button>
            </Link>
          </li>
          <li className="bg-slate-200 border rounded-2xl p-3">
            <Link to="/" className=" flex flex-col items-center">
              <img src="logo192.png" alt="Nsima with chisoso" />
              <h2>Nsima & Chisoso</h2>
              <p>k3500</p>
              <button className=" p-3 pl-6 pr-6 bg-orange-600 rounded-md">
                order
              </button>
            </Link>
          </li>
          <li className="bg-slate-200 border rounded-2xl p-3">
            <Link to="/" className=" flex flex-col items-center">
              <img src="logo192.png" alt="Nsima with chisoso" />
              <h2>Nsima & Chisoso</h2>
              <p>k3500</p>
              <button className=" p-3 pl-6 pr-6 bg-orange-600 rounded-md">
                order
              </button>
            </Link>
          </li>
        </ul>
        <ul className="flex gap-12 justify-around">
          <li className="bg-slate-200 border rounded-2xl p-3">
            <Link to="/" className=" flex flex-col items-center">
              <img src="logo192.png" alt="Nsima with chisoso" />
              <h2>Nsima & Chisoso</h2>
              <p>k3500</p>
              <button className=" p-3 pl-6 pr-6 bg-orange-600 rounded-md">
                order
              </button>
            </Link>
          </li>
          <li className="bg-slate-200 border rounded-2xl p-3">
            <Link to="/" className=" flex flex-col items-center">
              <img src="logo192.png" alt="Nsima with chisoso" />
              <h2>Nsima & Chisoso</h2>
              <p>k3500</p>
              <button className=" p-3 pl-6 pr-6 bg-orange-600 rounded-md">
                order
              </button>
            </Link>
          </li>
          <li className="bg-slate-200 border rounded-2xl p-3">
            <Link to="/" className=" flex flex-col items-center">
              <img src="logo192.png" alt="Nsima with chisoso" />
              <h2>Nsima & Chisoso</h2>
              <p>k3500</p>
              <button className=" p-3 pl-6 pr-6 bg-orange-600 rounded-md">
                order
              </button>
            </Link>
          </li>
          <li className="bg-slate-200 border rounded-2xl p-3">
            <Link to="/" className=" flex flex-col items-center">
              <img src="logo192.png" alt="Nsima with chisoso" />
              <h2>Nsima & Chisoso</h2>
              <p>k3500</p>
              <button className=" p-3 pl-6 pr-6 bg-orange-600 rounded-md">
                order
              </button>
            </Link>
          </li>
          <li className="bg-slate-200 border rounded-2xl p-3">
            <Link to="/" className=" flex flex-col items-center">
              <img src="logo192.png" alt="Nsima with chisoso" />
              <h2>Nsima & Chisoso</h2>
              <p>k3500</p>
              <button className=" p-3 pl-6 pr-6 bg-orange-600 rounded-md">
                order
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Menu;
