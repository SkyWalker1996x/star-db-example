import React from "react";

import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc";

const PersonDetails = ({ id, getData, getImageUrl }) => {
  /*const { getPerson, getPersonImage } = swapiService;*/
  return (
    <ItemDetails itemId={id} getData={getData} getImageUrl={getImageUrl}>
      <Record field={"name"} label={"Name"} />
      <Record field={"gender"} label={"Gender"} />
    </ItemDetails>
  );
};

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage,
  };
};

export default withSwapiService(PersonDetails, mapMethodToProps);
