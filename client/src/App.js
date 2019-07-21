import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MovieList from "./components/Movies-list";
import MovieDetail from "./components/Movie-detail";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={MovieList} />
        <Route path="/movies/:id" component={MovieDetail} />
      </Switch>
    </div>
  );
}

export default App;
