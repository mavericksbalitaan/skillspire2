import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);
	const decrement = () => {
		setCount((count) => count - 1);
	};

	const increment = () => {
		setCount((count) => count + 1);
	};

	return (
		<div>
			<h1>Count: {count}</h1>
			<button type="button" onClick={decrement}>
				Decrement -
			</button>
			<button type="button" onClick={increment}>
				Increment +
			</button>
		</div>
	);
}
