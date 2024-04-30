import { useState, useEffect } from "react";

export default function RandomNumberGenerator() {
	const [rand, setRand] = useState(0);

	useEffect(() => {
		setRand((prev) => {
			return Math.floor(Math.random() * 10) + 1;
		});
	}, []);

	return (
		<>
			<h1>Random Number: {rand}</h1>
		</>
	);
}
