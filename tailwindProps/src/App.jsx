import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import Card from "./components/Card";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  // let myObj = {
  //   userName: "Divyesh",
  //   age: 20,
  // };

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl text-black mb-4">Tailwind Test</h1>
      <Card userName="AnghanBrother" />
    </>
  );
}

export default App;
