import { useDispatch } from "react-redux";

export default function ProductList() {
	const dispatch = useDispatch();

	const products = [
		{
			id: "001",
			name: "Smartphone",
			price: 599.99,
			brand: "TechCo",
		},
		{
			id: "002",
			name: "Laptop",
			price: 1099.99,
			brand: "GigaByte",
		},
		{
			id: "003",
			name: "Headphones",
			price: 149.99,
			brand: "AudioTech",
		},
	];

	const add = (product) => {
		dispatch({
			type: "ATC",
			payload: {
				id: product.id,
				name: product.name,
				price: product.price,
				brand: product.brand,
			},
		});
	};

	return (
		<ol>
			{products.map((product) => {
				return (
					<li key={product.id}>
						<p>id: {product.id}</p>
						<p>name: {product.name}</p>
						<p>price: {product.price}</p>
						<p>brand: {product.brand}</p>
						<button type="button" onClick={() => add(product)}>
							Add
						</button>
						<br />
					</li>
				);
			})}
		</ol>
	);
}
