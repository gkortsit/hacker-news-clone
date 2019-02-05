import React from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import { showCommentList } from "../actions";
import "./Main.css";

class ItemComments extends React.Component {
  componentDidMount() {
    this.props.showCommentList(this.props.currentID);
  }

  render() {
    return (
      <div className="main-contaner">
        {this.props.currentCommentList.map(feedItem => {
          return <ListItem key={feedItem.id} data={feedItem} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentCommentList: state.currentCommentList,
    currentID: state.currentID
  };
};

export default connect(
  mapStateToProps,
  { showCommentList }
)(ItemComments);
