import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./app.css";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";

class App extends Component {
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
        <RandomPlanet />
        <ErrorButton />

        {/*<div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedItem} />
          </div>
        </div>*/}

        <PeoplePage/>
        <PeoplePage/>
        <PeoplePage/>
      </div>
    );
  }
}

export default App;
