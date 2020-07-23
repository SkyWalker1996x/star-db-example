import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc";

const PlanetDetails = ({ id, getData, getImageUrl }) => {
  return (
    <ItemDetails itemId={id} getData={getData} getImageUrl={getImageUrl}>
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
