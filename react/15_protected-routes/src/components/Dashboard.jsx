import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
	const navigate = useNavigate();
	// const user = {
	// 	name: "John Doe",
	// 	password: "12345678",
	// };

	const user = null;

	useEffect(() => {
		if (user === null) {
			navigate("/login");
		}
	}, [user]);

	return (
		<>
			{user && (
				<>
					<h1>Name: {user.name}</h1>
					<h1>Password: {user.password}</h1>
				</>
			)}
		</>
	);
}
