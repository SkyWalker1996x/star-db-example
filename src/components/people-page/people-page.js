import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import ItemDetails, {Record} from "../item-details/item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import Row from "../row";
import SwapiService from "../../services/swapi-service";

import "./people-page.css";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender }) => `${name} (${gender})`}
      />
    );
    const personDetails = (
      <ItemDetails
        itemId={this.state.selectedPerson}
        getData={this.swapiService.getPerson}
        getImageUrl={this.swapiService.getPersonImage}
      >
        <Record field='name' label='Name'/>
        <Record field='birthYear' label='Birth Year'/>
      </ItemDetails>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
