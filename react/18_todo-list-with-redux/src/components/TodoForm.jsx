import { useDispatch } from "react-redux";

export default function TodoForm() {
	const dispatch = useDispatch();

	const submitHandler = (evt) => {
		evt.preventDefault();
		const form = document.getElementById("myForm");
		const formData = new FormData(form);

		dispatch({
			type: "ADD",
			payload: {
				id: Math.floor(Math.random() * 100) + 1,
				todo: formData.get("todo"),
			},
		});
	};

	return (
		<form onSubmit={submitHandler} id="myForm">
			<label htmlFor="todo">Todo:</label>
			<input type="text" placeholder="Input todo" id="todo" name="todo" />
			<button type="submit">Add todo</button>
		</form>
	);
}
