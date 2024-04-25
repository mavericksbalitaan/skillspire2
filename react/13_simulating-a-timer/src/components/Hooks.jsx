import { useState, useEffect } from "react";

export default function Hooks() {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds + 1);
		}, 1000);

		return () => clearInterval(intervalId);
	});

	return (
		<>
			<h1>Seconds: {seconds}</h1>
		</>
	);
}
