import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state);

	const remove = (id) => {
		dispatch({ type: "RFC", payload: id });
	};

	return (
		<>
			<h1>My Cart</h1>
			<ol>
				{cart.length > 0 &&
					cart.map((product) => {
						return (
							<li key={product.id}>
								<p>id: {product.id}</p>
								<p>name: {product.name}</p>
								<p>price: {product.price}</p>
								<p>brand: {product.brand}</p>
								<button type="button" onClick={() => remove(product.id)}>
									Remove
								</button>
								<br />
							</li>
						);
					})}
			</ol>
		</>
	);
}
