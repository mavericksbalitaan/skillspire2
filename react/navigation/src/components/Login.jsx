import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector("form"));
		console.log(formData.get("username"))
    navigate("/", { state: formData.get("username") });
  };

  return (
    <div className="container">
      Login Page
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
