import React from "react";
import ListItem from "./ListItem";
import axios from "axios";
import "./Main.css";

class Main extends React.Component {
  state = {
    feedItems: []
  };

  componentDidMount() {
    axios.get("https://api.hnpwa.com/v0/news/1.json").then(res => {
      this.setState({
        feedItems: res.data
      });
    });
  }

  render() {
    return (
      <div class="main-contaner">
        {this.state.feedItems.map(feedItem => {
          console.log(feedItem);
          return <ListItem id={feedItem.id} data={feedItem} />;
        })}
      </div>
    );
  }
}

export default Main;
