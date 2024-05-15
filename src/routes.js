import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Payment from "./components/Payment.js";

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
  }
]);

export default router;
