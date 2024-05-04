import "./App.css";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "./components/Counter";

function App() {
  const initialState = {
    count: 0,
  };

  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INC":
        return { count: state.count + 1 };
      case "DEC":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const store = createStore(counterReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
