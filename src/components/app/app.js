import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";

import "./app.css";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import ItemDetails, { Record } from "../item-details";
import { PersonDetails, PersonList } from "../sw-components";

class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 7,
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
      <div className="container">
        <Header />
        {/*<RandomPlanet />
        <ErrorButton />*/}
        <ErrorBoundary>
          <Row
              left={<PersonList onItemSelected={this.onItemSelected} />}
              right={<PersonDetails id={this.state.selectedItem} />}
          />
        </ErrorBoundary>


      </div>
    );
  }
}

export default App;
