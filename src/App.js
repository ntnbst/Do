import { useState } from "react";
import "./styles.css";

export default function App() {
  let [state, setState] = useState([]);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);

    setInput(e.target.value);
  };

  const addItemTodo = () => {
    setState([...state, { name: input, isCompleted: false }]);
    setInput("");
  };

  console.table(state);
  return (
    <div className="App">
      <h2>Do</h2>
      <input value={input} onChange={handleChange} type="text" />
      <button onClick={addItemTodo}>ok</button>

      {state.map((item) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
}
