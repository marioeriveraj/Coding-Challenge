import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Payments from "./Payments";
import Checkout from "./Checkout";
import { payments } from "../payments";

const history = createBrowserHistory();

const App = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Payments
              payment={payments}
              selectPayment={setSelectedPayment}
              history={history}
            />
          )}
        />
        <Route
          path="/checkout"
          render={() => (
            <Checkout selectedPayment={selectedPayment} history={history} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
