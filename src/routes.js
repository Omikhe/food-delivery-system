import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Payment from "./components/Payment.js";
import Restraunts from "./components/Restaurants.js";
import About from "./components/About.js";
import Checkout from "./components/checkout.js";
import Menu from "./components/menu.js";
import Delivery from "./components/Delivery.js";
import Signup from "./components/Signup.js";

// Define the routes
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <Home />, // Render the App component
  },
  {
    path: "/Home", // /home path
    element: <Home />, // Render the Home component
  },
  {
    path: "/Login", // /login path
    element: <Login />, // Render the Login component
  },
  {
    path: "/pay",
    element: <Payment />
  },
  {
    path: "/Restaurants",
    element: <Restraunts />
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/Checkout",
    element: <Checkout />
  },
  {
    path: "/Menu",
    element: <Menu />
  },
  {
    path: "/Signup",
    element: <Signup/>
  },
  }
    path: "/Delivery",
    element: <Delivery />
  },
]);

export default router;
