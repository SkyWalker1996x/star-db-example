import React from "react";
import ItemList from "../item-list";
import { withData, withChildren, withSwapiService } from "../hoc";

const renderName = ({ name }) => <span>{name}</span>;

const mapPlanetsMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanet,
  };
};

const mapPeopleMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapStarshipsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = withSwapiService(
  withChildren(withData(ItemList), renderName),
  mapPeopleMethodToProps
);
const PlanetList = withSwapiService(
  withChildren(withData(ItemList), renderName),
  mapPlanetsMethodToProps
);
const StarshipList = withSwapiService(
  withChildren(withData(ItemList), renderName),
  mapStarshipsToProps
);

export { PlanetList, PersonList, StarshipList };
