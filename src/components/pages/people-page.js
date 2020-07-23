import React, { Component } from "react";
import Row from "../row";
import { PersonDetails, PersonList } from "../sw-components";
import { SwapiServiceProvider } from "../swapi-sevice-context";
import ErrorIndicator from "../error-indicator";

class PeoplePage extends Component {
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
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails id={this.state.selectedItem} />}
      />
    );
  }
}

export default PeoplePage;
