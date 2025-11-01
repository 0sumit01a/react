import React from "react";

const TodoApp = () => {
  const [task, setTask] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos((prev) => [...prev, task]);
      setTask("");
    }
  };

  const removeTask = (indexToRemove) => {
    setTodos((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div>
      <h2>Working with Arrays in useState</h2>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoApp;