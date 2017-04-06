import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Container from 'rebass/dist/Container';

import EmbedRoute from './components/EmbedRoute';
import EditorRoute from './components/EditorRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Route exact path="/" component={EditorRoute} />
          <Route
            exact
            path="/embed/:title/:unit/:wind"
            component={EmbedRoute}
          />

        </Container>
      </Router>
    );
  }
}

export default App;
