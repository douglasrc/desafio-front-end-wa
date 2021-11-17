import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Start } from "./components/Start";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/start" exact element={<Start />} />
      </Switch>
    </BrowserRouter>
  );
}
