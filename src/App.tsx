import { store } from "./app/store";
import { Provider } from "react-redux";

import AppWraper from "./AppWraper";

function App() {
  return (
    <Provider store={store}>
      <AppWraper />
    </Provider>
  );
}

export default App;
