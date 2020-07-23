import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc";

const PlanetDetails = ({ id, getPlanet, getPlanetImage }) => {
  return (
    <ItemDetails itemId={id} getData={getPlanet} getImageUrl={getPlanetImage}>
      <Record field={"name"} label={"Name"} />
      <Record field={"population"} label={"Population"} />
    </ItemDetails>
  );
};

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage,
  };
};

export default withSwapiService(PlanetDetails, mapMethodToProps);
