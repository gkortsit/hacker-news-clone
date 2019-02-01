import React from "react";
import MainPart from "./ListItemComponents/MainPart";
import SecondaryPart from "./ListItemComponents/SecondaryPart";
import "./ListItem.css";

const ListItem = ({ data }) => {
  const { title, url } = data;
  const { points, user, time_ago, comments_count } = data;
  return (
    <div className="item-container">
      <div className="item-body">
        <div className="main-part">
          <MainPart title={title} url={url} />
        </div>
      </div>
      <div className="secondary-part">
        <div>
          <SecondaryPart
            comments_count={comments_count}
            points={points}
            user={user}
            time_ago={time_ago}
          />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
