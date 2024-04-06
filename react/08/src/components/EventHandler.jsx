export default function EventHandler() {
	const clickHandler = () => {
		console.log("Button clicked");
	};

	return (
		<>
			<button type="button" onClick={clickHandler}>
				Click Me!
			</button>
		</>
	);
}
