import React from "react";

class Loading extends React.Component {
  state = {
    loading: "Loading",
  };

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.state.loading === "Loading..."
        ? this.setState({ loading: "Loading" })
        : this.setState(({ loading }) => {
            return {
              loading: `${loading}.`,
            };
          });
    }, 250);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <h1>{this.state.loading}</h1>;
  }
}

export default Loading;
