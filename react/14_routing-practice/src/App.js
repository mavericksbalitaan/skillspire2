import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Name from "./components/Name";
import Food from "./components/Food";
import Vacation from "./components/Vacation";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/display-name",
      element: <Name />,
    },
    {
      path: "/display-food",
      element: <Food />,
    },
    {
      path: "/display-vacation",
      element: <Vacation />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
