import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App(){
  return(
    <Router>
      <Switch>
        <main>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} exact />
          <Container>
          </Container>
        </main>
      </Switch>
    </Router>
  );
}

export default App;