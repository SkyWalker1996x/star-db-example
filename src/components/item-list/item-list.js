import React, { Component } from "react";
import { withData } from "../hoc";
import SwapiService from "../../services/swapi-service";
import "./item-list.css";

const ItemList = ({ data, onItemSelected, renderItem }) => {
  const renderItems = (arr) => {
    return arr.map((item) => {
      const { id } = item;
      const label = renderItem(item);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  };

  const itemList = renderItems(data);

  return <ul className="item-list list-group">{itemList}</ul>;
};

const swapi = new SwapiService();

const { getAllPeople } = swapi;

export default withData(ItemList, getAllPeople);
