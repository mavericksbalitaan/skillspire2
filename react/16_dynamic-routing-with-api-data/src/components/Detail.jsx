import { useParams } from "react-router-dom";

export default function Detail() {
	const params = useParams();

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

	const car = cars.find((car) => {
		return car.id === parseInt(params.id);
	});

	console.log(car);

	return (
		<>
			{car && (
				<>
					<h1>Car Type: {car.type}</h1>
					<h1>Car Color: {car.color}</h1>
					<h1>Car Registration: {JSON.stringify(car.registration)}</h1>
					<h1>Car Capacity: {car.capacity}</h1>
					<a href="/">Back</a>
					<hr />
				</>
			)}
		</>
	);
}
