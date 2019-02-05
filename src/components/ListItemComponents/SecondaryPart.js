import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCommentId } from "../../actions";

import "./SecondaryPart.css";

class SecondaryPart extends React.Component {
  handleID = id => {
    this.props.getCommentId(id);
  };

  render() {
    const { points, user, time_ago, comments_count, id } = this.props;
    return (
      <div className="sp-main">
        <div className="points">
          {points} points by {user}
        </div>
        <div className="sec-item mid-item">{time_ago}</div>
        <Link
          to={`/${id}`}
          className="sec-item"
          onClick={() => this.handleID(id)}
        >
          {comments_count} comments
        </Link>
      </div>
    );
  }
}

export default connect(
  null,
  { getCommentId }
)(SecondaryPart);
