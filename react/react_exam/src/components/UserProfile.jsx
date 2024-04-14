import UserProfileInfo from "./UserProfileInfo";

export default function UserProfile() {
	const user = {
		name: "John Doe",
		bio: "Developer",
		avatarUrl: "https://robohash.org/John%20Doe",
	};

	return (
		<>
			<h1>UserProfile</h1>
			<UserProfileInfo
				name={user.name}
				bio={user.bio}
				avatarUrl={user.avatarUrl}
			/>
		</>
	);
}
