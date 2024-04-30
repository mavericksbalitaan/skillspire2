import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/items/:id",
      element: <Detail />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
