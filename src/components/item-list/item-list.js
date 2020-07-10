import React, { Component } from "react";

import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Loader from "../loader";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    people: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((people) => this.setState({ people }))
      .catch(this.onError);
  }

  onError = () => {
    this.setState({ error: true, loading: false });
  };


  renderItems = (arr) => {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  };

  render() {
    const { people, loading, error } = this.state;

    if(!people) {
      return <Loader/>
    }

    const peopleList = this.renderItems(people);

    return <ul className="item-list list-group">{peopleList}</ul>;
  }
}
