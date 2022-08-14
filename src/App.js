import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/Counter";
import Multiply from "./components/Multiply";

function App() {
  return (
    <Provider store={store}>
        <Counter id="from counter" />
        <Multiply id="from multiply" />
    </Provider>
  );
}

export default App;
