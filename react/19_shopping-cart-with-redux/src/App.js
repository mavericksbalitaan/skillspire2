import "./App.css";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const initialState = [];

  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ATC":
        return [...state, action.payload];
      case "RFC":
        return state.filter((product) => product.id !== action.payload);
      default:
        return state;
    }
  };

  const store = createStore(productReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <ProductList />
        <Cart />
      </Provider>
    </div>
  );
}

export default App;
