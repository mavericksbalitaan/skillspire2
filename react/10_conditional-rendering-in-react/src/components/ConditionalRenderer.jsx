import React from "react";

export default class ConditionalRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  clickHandler() {
    if (this.state.isVisible === true) {
      this.setState({ isVisible: false });
    } else {
      this.setState({ isVisible: true });
    }
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.clickHandler.bind(this)}>
          Click Me
        </button>
        {(this.state.isVisible && <div>Component is Visible</div>) || (
          <div>Component is Hidden</div>
        )}
      </>
    );
  }
}
