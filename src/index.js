import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SearchPannel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPannel />
      <TodoList />
    </div>
  );
};

console.log(<App />);
ReactDOM.render(<App />, document.getElementById("root"));
