import React from "react";
import ListItem from "./ListItem";
import Api from "../Api";

const Main = () => {
  return Api.map(item => {
    return <ListItem data={item} />;
  });
};

export default Main;
