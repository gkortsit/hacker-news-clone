import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import New from "./components/New";
import ItemComments from "./components/ItemComments";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Header />
            <Route path="/" exact component={Main} />
            <Route path="/new" exact component={New} />
            <Route path="/item:id" exact component={ItemComments} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
