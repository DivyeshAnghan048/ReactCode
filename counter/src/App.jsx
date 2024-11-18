import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 5;

  const addValue = () => {
    // console.log("Clicked", counter);
    // counter = counter + 1;

    setCounter(counter + 1);
  };

  const removeValue = () => {
    // console.log("Clicked", counter);
    // counter = counter - 1;

    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Number Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button> <br /> <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
