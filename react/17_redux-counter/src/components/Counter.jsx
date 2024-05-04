import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
	const count = useSelector((state) => {
		return state.count;
	});

	const dispatch = useDispatch();

	const dec = () => {
		dispatch({ type: "DEC" });
	};

	const inc = () => {
		dispatch({ type: "INC" });
	};

	return (
		<>
			<h1>Count: {count}</h1>
			<button type="button" onClick={dec}>
				DEC
			</button>
			<button type="button" onClick={inc}>
				INC
			</button>
		</>
	);
}
