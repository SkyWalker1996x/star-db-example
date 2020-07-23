import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc";

const PlanetDetails = ({ id, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;
  return (
    <ItemDetails itemId={id} getData={getPlanet} getImageUrl={getPlanetImage}>
      <Record field={"name"} label={"Name"} />
      <Record field={"population"} label={"Population"} />
    </ItemDetails>
  );
};

export default withSwapiService(PlanetDetails);
