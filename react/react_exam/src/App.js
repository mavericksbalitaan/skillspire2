import "./App.css";
import UserProfile from "./components/UserProfile";
import UserProfileHeader from "./components/UserProfileHeader";
import UserProfilePosts from "./components/UserProfilePosts";
import Counter from "./components/Counter";
import ToggleSwitch from "./components/ToggleSwitch";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <UserProfile />
      <UserProfileHeader />
      <UserProfilePosts />
      <Counter />
      <ToggleSwitch />
      <TodoList />
    </div>
  );
}

export default App;
