import React from "react";
import MainPart from "./ListItemComponents/MainPart";
import SecondaryPart from "./ListItemComponents/SecondaryPart";

const ListItem = () => {
  return (
    <tr>
      <MainPart />
      <SecondaryPart />
    </tr>
  );
};

export default ListItem;
