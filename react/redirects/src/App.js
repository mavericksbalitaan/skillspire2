import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/userprofile",
      element: <UserProfile />,
    },
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
