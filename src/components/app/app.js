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
        <Row
          left={
            <PersonList onItemSelected={this.onItemSelected}>
              {({ name, gender }) => `${name} (${gender})`}
            </PersonList>
          }
          right={<PersonDetails id={this.state.selectedItem} />}
        />
        {/*<ErrorBoundary>
          <Row
            left={
              <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPlanet}
                renderItem={({ name, population }) =>
                  `${name} (population: ${population})`
                }
              />
            }
            right={
              <ItemDetails
                itemId={this.state.selectedItem}
                getData={this.swapiService.getPlanet}
                getImageUrl={this.swapiService.getPlanetImage}
              >
                <Record field={'name'} label={'Name'}/>
                <Record field={'population'} label={'Population'}/>
              </ItemDetails>
            }
          />
        </ErrorBoundary>*/}
      </div>
    );
  }
}

export default App;
