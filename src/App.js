import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Top from "./components/Top";
import Nav from "./components/Nav";
import User from "./components/User";
import Comments from "./components/Comments";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Top} />
        <Route path="/users" component={User} />
        <Route path="/posts/comments" component={Comments} />
      </div>
    </Router>
  );
}

export default App;
