import React from "react";
import MainPart from "./ListItemComponents/MainPart";
import SecondaryPart from "./ListItemComponents/SecondaryPart";
import "./ListItem.css";

const ListItem = ({ data }) => {
  const { title, url } = data;
  const { points, user, time_ago, comments_count } = data;
  console.log(time_ago);
  return (
    <table className="item-body">
      <tbody>
        <tr className="main-part">
          <td>
            <MainPart title={title} url={url} />
          </td>
        </tr>
        <tr className="secondary-part">
          <td>
            <SecondaryPart
              comments_count={comments_count}
              points={points}
              user={user}
              time_ago={time_ago}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListItem;
