import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/new" exact component={New} />
              <Route path="/:id" component={ItemComments} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
