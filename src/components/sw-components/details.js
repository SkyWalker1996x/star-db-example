import React from "react";
import ItemDetails, { Record } from "../item-details";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPlanetImage,
  getPersonImage,
  getStarshipImage,
} = swapiService;



const PersonDetails = ({ id }) => {
    return (
        <ItemDetails itemId={id} getData={getPerson} getImageUrl={getPersonImage}>
            <Record field={"name"} label={"Name"} />
            <Record field={"gender"} label={"Gender"} />
        </ItemDetails>
    );
};

const PlanetDetails = ({ id }) => {
    return (
        <ItemDetails itemId={id} getData={getPlanet} getImageUrl={getPlanetImage}>
            <Record field={"name"} label={"Name"} />
            <Record field={"population"} label={"Population"} />
        </ItemDetails>
    );
};

const StarshipDetails = ({ id }) => {
    return (
        <ItemDetails itemId={id} getData={getStarship} getImageUrl={getStarshipImage}>
            <Record field={"name"} label={"Name"} />
            <Record field={"length"} label={"length"} />
        </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
