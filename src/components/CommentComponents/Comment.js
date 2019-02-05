import React from "react";
import "./Comment.css";

class Comment extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className="comment-container">
        <div className="comment-top">
          {data.user} {data.time_ago}
        </div>
        <div
          className="comment-text"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    );
  }
}

export default Comment;
