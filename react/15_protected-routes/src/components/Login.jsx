export default function Login() {
	return (
		<form>
			<label for="name">Name:</label>
			<input type="text" id="name" placeholder="Input name" />
			<br />
			<label for="password">Password:</label>
			<input type="password" id="password" placeholder="Input password" />
		</form>
	);
}
