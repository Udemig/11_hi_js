import { useEffect, useState } from "react";
import axios from "axios";
import { IoMenu } from "react-icons/io5";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { RiSearch2Line } from "react-icons/ri";
import { MdPersonAddAlt1 } from "react-icons/md";
import Card from "./components/Card";
import Modal from "./components/Modal";

const App = () => {
  const [contacts, setContact] = useState([]);

  // bileşenin ekrana basılma anını izle
  useEffect(() => {
    // api'a rehber veileri için istek at
    axios
      .get("http://localhost:3000/contact")
      .then((res) => setContact(res.data));
  }, []);

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki metni ak
    const text = e.target[1].value;

    // api'a gönderilcek parametreleri belirle
    const params = {
      q: text,
    };

    // api'dan aratılan metne uygun verileri al
    axios
      .get("http://localhost:3000/contact", { params })
      .then((res) => setContact(res.data));
  };

  return (
    <div className="app">
      <header>
        <h1>Rehber</h1>

        <div>
          <form onSubmit={handleSubmit}>
            <button>
              <RiSearch2Line />
            </button>
            <input placeholder="kişi aratın..." type="search" />
          </form>

          <button className="ns">
            <IoMenu />
          </button>

          <button className="ns">
            <HiMiniSquares2X2 />
          </button>

          <button className="add">
            <MdPersonAddAlt1 />
            <span> Yeni Kişi</span>
          </button>
        </div>
      </header>

      <main>
        {contacts.map((contact) => (
          <Card key={contact.id} contact={contact} />
        ))}
      </main>

      {/* todo modal açılığ kapanbilmeli */}
      <Modal />
    </div>
  );
};

export default App;
