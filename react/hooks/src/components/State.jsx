import { useState } from "react";

export default function State() {
	const [address, setAddress] = useState({
		phoneNumber: "978-435-1780",

		address: {
			houseNumber: "E-142/10",

			street: "Street 50",

			district: "Garden Town",

			city: "Karachi",
		},
	});

	const changeAddressState = () => {
		setAddress({
			phoneNumber: "978-435-1780",
			address: {
				houseNumber: "R-214",
				street: "Napier Road",
				district: "North Karachi",
				city: "Karachi",
			},
		});
	};
	return (
		<div>
			<button onClick={changeAddressState}>Update state</button>
			<div>State: {JSON.stringify(address)}</div>
		</div>
	);
}
