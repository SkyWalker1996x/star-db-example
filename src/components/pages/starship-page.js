import React, { Component } from "react";
import Row from "../row";
import { StarshipDetails, StarshipList } from "../sw-components";
import ErrorIndicator from "../error-indicator";

export default class StarshipPage extends Component {
  state = {
    selectedItem: 9,
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      hasError: true,
    });
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails id={this.state.selectedItem} />}
      />
    );
  }
}
