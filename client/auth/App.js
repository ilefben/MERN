import AppNavBar from "./components/AppNavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { store } from "./js/store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppNavBar />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
