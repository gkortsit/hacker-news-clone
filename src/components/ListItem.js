import React from "react";
import MainPart from "./ListItemComponents/MainPart";
import SecondaryPart from "./ListItemComponents/SecondaryPart";
import "./ListItem.css";

const ListItem = ({ data }) => {
  const { id, title, url } = data;
  const { score, author, time, comments } = data;
  return (
    <table className="item-body">
      <tbody>
        <tr className="main-part">
          <td>
            <MainPart id={id} title={title} url={url} />
          </td>
        </tr>
        <tr className="secondary-part">
          <td>
            <SecondaryPart
              comments={comments}
              score={score}
              author={author}
              time={time}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListItem;
