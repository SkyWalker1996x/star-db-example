import React, { Component } from "react";

import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Loader from "../loader";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    items: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((items) => this.setState({ items }))
      .catch(this.onError);
  }

  onError = () => {
    this.setState({ error: true, loading: false });
  };

  renderItems = (arr) => {
    const { renderItem } = this.props;
    console.log(renderItem);
    console.log(this.props);

    return arr.map((item) => {
      const { id } = item;
      const label = renderItem(item);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  };

  render() {
    const { items, loading, error } = this.state;

    if (!items) {
      return <Loader />;
    }

    const itemList = this.renderItems(items);

    return <ul className="item-list list-group">{itemList}</ul>;
  }
}
