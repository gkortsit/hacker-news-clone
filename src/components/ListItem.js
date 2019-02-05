import React from "react";
import MainPart from "./ListItemComponents/MainPart";
import SecondaryPart from "./ListItemComponents/SecondaryPart";
import "./ListItem.css";

const ListItem = ({ data }) => {
  const { title, domain } = data;
  const { points, user, time_ago, comments_count, id } = data;
  return (
    <div className="item-container">
      <div className="item-body">
        <div className="main-part">
          <MainPart title={title} domain={domain} />
        </div>
      </div>
      <div className="secondary-part">
        <div>
          <SecondaryPart
            comments_count={comments_count}
            points={points}
            user={user}
            time_ago={time_ago}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
