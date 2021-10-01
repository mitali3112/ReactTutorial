import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Django" />
      <Todo text="Make Model" />
    </div>
  );
}

export default App;
