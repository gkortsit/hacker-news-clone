import React from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import { fetchDefaultItems } from "../actions";
import "./Main.css";

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchDefaultItems();
  }

  render() {
    return (
      <div className="main-contaner">
        {this.props.defaultItems.map(feedItem => {
          return <ListItem key={feedItem.id} data={feedItem} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    defaultItems: state.defaultItems
  };
};

export default connect(
  mapStateToProps,
  { fetchDefaultItems }
)(Main);
