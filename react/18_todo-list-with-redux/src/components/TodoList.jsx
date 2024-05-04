import { useSelector, useDispatch } from "react-redux";

export default function TodoList() {
	const dispatch = useDispatch();

	const todos = useSelector((state) => state.todos);
	const remove = (id) => {
		dispatch({
			type: "REMOVE",
			payload: {
				id: id,
			},
		});
	};

	return (
		<ol>
			{todos.length > 0 &&
				todos.map((todo) => {
					return (
						<li key={todo.id}>
							<p>{todo.id}</p>
							<p>{todo.todo}</p>
							<button type="button" onClick={() => remove(todo.id)}>
								Remove
							</button>
						</li>
					);
				})}
		</ol>
	);
}
