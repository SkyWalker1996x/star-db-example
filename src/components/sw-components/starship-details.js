import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc";

const StarshipDetails = ({ id, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;
  return (
    <ItemDetails
      itemId={id}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field={"name"} label={"Name"} />
      <Record field={"length"} label={"length"} />
    </ItemDetails>
  );
};

export default withSwapiService(StarshipDetails);
