import React, { Component, Fragment } from "react";

import SwapiService from "../../services/swapi-service";
import "./random-planet.css";
import Loader from "../loader";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.planetInterval = setInterval(this.updatePlanet, 250000);
  }

  onError = () => {
    this.setState({ error: true, loading: false });
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  updatePlanet = () => {
    this.setState({ loading: true });
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService
      .getPlanet(id)
      .then((data) => {
        this.onPlanetLoaded(data);
      })
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const errorMessage = error ? <ErrorIndicator /> : null;
    const loader = loading ? <Loader /> : null;
    const content = !loading && !error ? <PlanetLoaded {...planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {loader}
        {content}
      </div>
    );
  }
}

const PlanetLoaded = ({ id, name, population, rotationPeriod, diameter }) => {
  return (
    <Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
