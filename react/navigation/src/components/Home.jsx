import { useState, useEffect } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setUsername(location.state);
      setIsLoggedIn(true);
      navigate("/");
    }
  });

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      Home
      <br />
      {isLoggedIn ? (
        `Welcome back, ${username}!`
      ) : (
        <Navigate replace to="/login" />
      )}
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
