export default function ListRenderer() {
	const arr = ["Apple", "Banana", "Orange"];

	return (
		<ul>
			{arr.map((el) => {
				return <li key={el}>{el}</li>;
			})}
		</ul>
	);
}
