import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import { withData, withChildren } from "../hoc";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanet, getAllStarships } = swapiService;

const renderName = ({ name }) => `${name}`;

const PersonList = withChildren(
    withData(ItemList, getAllPeople),
    renderName
);
const PlanetList = withChildren(
    withData(ItemList, getAllPlanet),
    renderName
);
const StarshipList = withChildren(
  withData(ItemList, getAllStarships),
  renderName
);

export { PlanetList, PersonList, StarshipList };
