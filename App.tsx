import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Container from "./Container";
import store from "./redux/store";
import { persistStore } from "redux-persist";

let persistorWrapp = persistStore(store);
function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistorWrapp}>
        <Container />
      </PersistGate>
    </Provider>
  );
}
export default App;
