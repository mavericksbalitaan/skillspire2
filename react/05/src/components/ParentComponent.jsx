import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
	return (
		<div>
			<h1>Parent Component</h1>
			<ChildComponent firstName="John" lastName="Doe" age="32" />
		</div>
	);
}
