import styles from "../stylesheets/TodoList.module.css";

export default function TodoList() {
	const todos = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

	return (
		<>
			<h1>TodoList</h1>
			<ul className={styles.ul}>
				{todos.length > 0 ? (
					todos.map((todo) => {
						return <li className={styles.li}>{todo}</li>;
					})
				) : (
					<p>There is no todo</p>
				)}
			</ul>
		</>
	);
}
