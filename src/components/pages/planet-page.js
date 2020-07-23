import React, { Component } from "react";
import Row from "../row";
import { PlanetList, PlanetDetails } from "../sw-components";
import ErrorIndicator from "../error-indicator";

export default class PlanetPage extends Component {
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
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails id={this.state.selectedItem} />}
      />
    );
  }
}
