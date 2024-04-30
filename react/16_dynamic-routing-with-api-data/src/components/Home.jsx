export default function Home() {
	let cars = [
		{
			id: 1,
			color: "purple",
			type: "minivan",
			registration: new Date("2017-01-03"),
			capacity: 7,
		},
		{
			id: 2,
			color: "red",
			type: "station wagon",
			registration: new Date("2018-03-03"),
			capacity: 5,
		},
		{
			id: 3,
			color: "blue",
			type: "sedan",
			registration: new Date("2019-04-08"),
			capacity: 4,
		},
	];

	return (
		<>
			{cars &&
				cars.map((car) => {
					return (
						<>
							<h1>Car Type: {car.type}</h1>
							<h1>Car Color: {car.color}</h1>
							<a href={`/items/${car.id}`}>Click for details </a>
							<hr />
						</>
					);
				})}
		</>
	);
}
