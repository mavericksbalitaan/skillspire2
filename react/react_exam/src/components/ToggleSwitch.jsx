import { Component } from "react";

export default class ToggleSwitch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			switch: true,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((state, props) => {
			return {
				switch: !this.state.switch,
			};
		});
	}

	render() {
		return (
			<>
				<h1>Toggle Switch</h1>
				<button type="button" onClick={this.handleClick}>
					Click me!
				</button>
				<input type="checkbox" checked={this.state.switch} />
				<span>Switch</span>
			</>
		);
	}
}
