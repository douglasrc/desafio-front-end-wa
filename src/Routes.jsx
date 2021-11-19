import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Start } from "./components/Start";
import { Quiz } from "./components/Quiz";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/quiz" element={<Quiz />} />
      </Switch>
    </BrowserRouter>
  );
}
