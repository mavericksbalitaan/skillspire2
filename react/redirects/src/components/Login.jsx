import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const formData = new FormData(document.querySelector("form"));
		console.log(formData.get("username"));

		if (isUserLoggedIn) {
			navigate("/userprofile", { state: formData.get("username") });
		}
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsUserLoggedIn(!isUserLoggedIn);
		if (isUserLoggedIn) {
			navigate("/userprofile", { state: "John Doe" });
		}
	};

	return (
		<div>
			Login Page
			<form onSubmit={handleSubmit}>
				<input type="text" name="username" />
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
