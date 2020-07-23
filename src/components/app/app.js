import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";

import "./app.css";

import ErrorIndicator from "../error-indicator";

import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

import {PersonDetails, PersonList, PlanetList, StarshipList} from "../sw-components";
import { SwapiServiceProvider } from "../swapi-sevice-context";
import PlanetDetails from "../sw-components/planet-details";
import StarshipDetails from "../sw-components/starship-details";

class App extends Component {
  swapiService = new SwapiService();

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
      <div className="container">
        <Header />
        {/*<RandomPlanet />
        <ErrorButton />*/}
        <ErrorBoundary>
          <SwapiServiceProvider value={this.swapiService}>
            <Row
              left={<PersonList onItemSelected={this.onItemSelected} />}
              right={<PersonDetails id={this.state.selectedItem} />}
            />

            <Row
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails id={this.state.selectedItem} />}
            />

            <Row
                left={<StarshipList onItemSelected={this.onItemSelected} />}
                right={<StarshipDetails id={this.state.selectedItem} />}
            />
          </SwapiServiceProvider>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
