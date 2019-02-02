import React from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import { showCommentList } from "../actions";
import "./Main.css";

class ItemComments extends React.Component {
  componentDidMount() {
    // this.props.showCommentList();
    console.log(this.props);
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
    currentCommentList: state.currentCommentList
  };
};

export default connect(
  mapStateToProps,
  { showCommentList }
)(ItemComments);
