import Counter from "./components/Counter";
import Accordion from "./components/Accordion";

const App = () => {
  return (
    <div className="bg-dark text-white vh-100 p-5 d-flex flex-column gap-5">
      <h1 className="text-center">STATE</h1>

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
