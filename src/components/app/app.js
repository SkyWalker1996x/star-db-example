import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary";
import { SwapiServiceProvider } from "../swapi-sevice-context";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import StarshipPage from "../pages/starship-page";

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className="container">
        <Header />
        {/*<RandomPlanet />
        <ErrorButton />*/}
        <ErrorBoundary>
          <SwapiServiceProvider value={this.swapiService}>
            <PeoplePage />
            <PlanetPage />
            <StarshipPage />
          </SwapiServiceProvider>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
