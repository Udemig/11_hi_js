import Counter from "./components/Counter";
import Accordion from "./components/Accordion";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [isLight, setIsLight] = useState(false);

  return (
    <div
      className={`${
        isLight ? "bg-white text-dark" : "bg-dark text-white"
      } vh-100 px-5 d-flex flex-column gap-5`}
    >
      <Navbar setIsLight={setIsLight} />

      <Counter />

      <Accordion
        title="Hangi teknolojiler kullanıldı?"
        desc="Bu web projesinin frontend alanında React, Javascript, Redux kullanılırken backend alanında Node.js kullanıldı."
      />
      <Accordion
        title="Kaç gün sürdü?"
        desc="Bu web projesinin frontend alanı 3ay backend alanı 2 ay sürdü"
      />
    </div>
  );
};

export default App;
