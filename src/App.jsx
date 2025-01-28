import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-center text-3xl font-bold text-blue-500">
        Hello, Tailwind CSS!
      </div>
    </>
  );
}

export default App;
