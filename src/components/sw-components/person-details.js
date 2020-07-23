import React from "react";

import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc";

const PersonDetails = ({id, swapiService}) => {

  const { getPerson, getPersonImage } = swapiService;
  return (
    <ItemDetails itemId={id} getData={getPerson} getImageUrl={getPersonImage}>
      <Record field={"name"} label={"Name"} />
      <Record field={"gender"} label={"Gender"} />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
