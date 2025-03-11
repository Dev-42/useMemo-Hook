import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  function expensiveTask(num) {
    console.log("Inside expensive function");
    for (let i = 0; i <= 1000000000; i++) {
      /* empty */
    }
    return num * 2;
  }
  // let doubleValue = expensiveTask(input);
  let cachedDoubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Count : {count}</div>
      <input
        type="text"
        placeholder="Enter a number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>Double: {cachedDoubleValue}</div>
    </>
  );
}

export default App;
