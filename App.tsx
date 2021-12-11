import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Container from "./Container";
import store from "./redux/store";
import { persistStore } from "redux-persist";

let persistorWrapp = store;
function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
export default App;
