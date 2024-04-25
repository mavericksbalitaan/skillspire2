import { useState, useEffect } from "react";

export default function Hooks2() {
	const [title, setTitle] = useState(null);

	useEffect(() => {
		if (title == null) {
			setTitle(0);
		}

		document.title = title;
	}, [title]);

	return (
		<div>
			Condition used inside a Hook
			<button onClick={() => setTitle(title + 1)}>+1</button>
		</div>
	);
}
