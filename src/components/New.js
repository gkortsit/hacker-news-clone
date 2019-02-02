import React from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import { fetchNewItems } from "../actions";
import "./Main.css";

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchNewItems();
  }

  render() {
    return (
      <div className="main-contaner">
        {this.props.newItems.map(feedItem => {
          return <ListItem key={feedItem.id} data={feedItem} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newItems: state.newItems
  };
};

export default connect(
  mapStateToProps,
  { fetchNewItems }
)(Main);
