import React, { Component } from "react";
import Banner from "./components/Banner";
import Links from "./components/Links";
import Projects from "./components/Projects";
import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="container">
          <Banner />
          <Links />
          <Projects />
        </div>
      </Provider>
    );
  }
}

export default App;
