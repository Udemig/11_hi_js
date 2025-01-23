import { useState } from "react";
import Button from "./components/button";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>{count}</h1>

      <Button text="Arttır" handler={() => setCount(count + 1)} />
    </div>
  );
};

export default App;
