import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import New from "./components/New";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Header />
            <Route path="/" exact component={Main} />
            <Route path="/new" exact component={New} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
