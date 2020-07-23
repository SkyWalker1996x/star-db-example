import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc";

const StarshipDetails = ({ id, getData, getImageUrl }) => {
  return (
    <ItemDetails itemId={id} getData={getData} getImageUrl={getImageUrl}>
      <Record field={"name"} label={"Name"} />
      <Record field={"length"} label={"length"} />
    </ItemDetails>
  );
};

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

export default withSwapiService(StarshipDetails, mapMethodToProps);
