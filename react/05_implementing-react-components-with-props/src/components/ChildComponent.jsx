export default function ChildComponent(props) {
	return (
		<div>
			<h1>Child Component</h1>
			<p>First Name: {props.firstName}</p>
			<p>Last Name: {props.lastName}</p>
			<p>Age: {props.age}</p>
		</div>
	);
}
