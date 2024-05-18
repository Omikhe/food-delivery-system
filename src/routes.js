import { createBrowserRouter } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import Menu from "./components/menu";
import App from "./App";
 // Define the routes
 const router = createBrowserRouter([
 {
 path: "/", // Root path
 element: <App />, // Render the App component
 },
 {
 path: "/NavBar", // /home path
 element: <NavBar />, // Render the Home component
 },
 {
 path: "/menu", // /home path
 element: <menu />, // Render the Home component
 },
 ]);
 export default router;