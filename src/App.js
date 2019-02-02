import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Header />
            <Route path="/" exact component={Main} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
