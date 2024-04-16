import { useState, useEffect } from "react";

export default function Effect() {
	const [title, setTitle] = useState(null);

	if (title == null) {
		setTitle(0);
	}

	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<div>
			Condition used inside a Hook
			<button onClick={() => setTitle(title + 1)}>+1</button>
		</div>
	);
}
