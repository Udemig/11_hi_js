import { useState } from "react";
import Pagination from "./components/classComp";
import Counter from "./components/functionComp";
import UserList from "./components/UserList";
import UserPicker from "./components/UserPicker";
import CountDown from "./components/CountDown";

const App = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="min-vh-100 bg-dark text-white p-5 mx-auto">
      <button
        className="btn btn-primary mb-5"
        onClick={() => setIsShow(!isShow)}
      >
        Gizle / Göster
      </button>

      {isShow && <CountDown />}
    </div>
  );
};

export default App;
