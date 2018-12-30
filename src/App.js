import React from "react";
import Routes from "./routes/routes";

import { Provider } from "react-redux";
import Store from "./store/store";

const App = () => (
  <Provider store={Store}>
    <Routes />
  </Provider>
);

export default App;
