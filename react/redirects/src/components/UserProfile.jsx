import { useLocation } from "react-router-dom";

export default function UserProfile() {
	const location = useLocation();
	const username = location.state;
	console.log(username);

	return <div>Welcome, {username}!</div>;
}
