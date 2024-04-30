import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ElementRenderer from "./components/ElementRenderer";
import Counter from "./components/Counter";
import RandomNumberGenerator from "./components/RandomNumberGenerator";
import Courses from "./components/Courses";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ElementRenderer />,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
    {
      path: "/randomnumber",
      element: <RandomNumberGenerator />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
