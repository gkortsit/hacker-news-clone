import React from "react";
import ListItem from "./ListItem";
import axios from "axios";
import "./Main.css";

class Main extends React.Component {
  state = {
    defaultItems: [],
    newItems: []
  };

  componentDidMount() {
    axios.get("https://api.hnpwa.com/v0/news/1.json").then(res => {
      this.setState({
        defaultItems: res.data
      });
    });

    axios.get("https://api.hnpwa.com/v0/newest/1.json").then(res => {
      this.setState({
        newItems: res.data
      });
    });
  }

  render() {
    return (
      <div className="main-contaner">
        {console.log(this.state.defaultItems)}
        {this.state.defaultItems.map(feedItem => {
          return <ListItem key={feedItem.id} data={feedItem} />;
        })}
      </div>
    );
  }
}

export default Main;
