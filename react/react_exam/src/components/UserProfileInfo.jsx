export default function UserProfileInfo({ name, bio, avatarUrl }) {
	return (
		<>
			<h2>{name}</h2>
			<p>{bio}</p>
			<img src={avatarUrl} alt="avatarUrl" />
		</>
	);
}
