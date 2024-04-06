import React from "react";

export default class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	// recommended
	increment() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
			};
		});
	}

	// not recommended
	decrement() {
		this.setState({ count: this.state.count - 1 });
	}

	render() {
		return (
			<>
				<button type="button" onClick={this.decrement}>
					Decrement -
				</button>
				{this.state.count}
				<button type="button" onClick={this.increment}>
					Increment +
				</button>
			</>
		);
	}
}
