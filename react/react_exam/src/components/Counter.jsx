import { Component } from "react";

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
		this.decrement = this.decrement.bind(this);
		this.increment = this.increment.bind(this);
	}

	decrement() {
		this.setState((state, props) => {
			return {
				counter: state.counter - 1,
			};
		});
	}

	increment() {
		this.setState((state, props) => {
			return {
				counter: state.counter + 1,
			};
		});
	}

	componentDidMount() {
		console.log("Component did mount");
	}

	componentDidUpdate() {
		console.log("Component did update");
	}

	componentWillUnmount() {
		console.log("Component will unmount");
	}

	render() {
		return (
			<>
				<h1>Counter: {this.state.counter}</h1>
				<button type="button" onClick={this.decrement}>
					Decrement
				</button>
				<button type="button" onClick={this.increment}>
					Increment
				</button>
			</>
		);
	}
}
