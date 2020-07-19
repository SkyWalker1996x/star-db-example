import React from "react";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import { withData } from "../hoc";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanet, getAllStarships } = swapiService;

const withChildren = (Wrapped, renderFn) => {
  return (props) => {
    return <Wrapped {...props}>{renderFn}</Wrapped>;
  };
};

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanet);
const StarshipList = withData(ItemList, getAllStarships);

export { PlanetList, PersonList, StarshipList };
