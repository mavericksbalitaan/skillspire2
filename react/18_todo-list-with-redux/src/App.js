import "./App.css";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const initialState = {
    todos: [
      {
        id: 1,
        todo: "Learn Redux",
      },
    ],
  };

  const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD":
        return { ...state, todos: [...state.todos, action.payload] };
      case "REMOVE":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        };
      default:
        return state;
    }
  };

  const store = createStore(todosReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <TodoForm />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
