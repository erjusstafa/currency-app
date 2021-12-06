import React from "react";
import { Provider } from "react-redux";
import Container from "./Container";
import store from "./redux/store";

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
export default App;
