import React from "react";
import { Route } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome page</h1>
      <Route path="/welcome/new-user">
        <p> Welcome new user!!</p>
      </Route>
    </div>
  );
}
