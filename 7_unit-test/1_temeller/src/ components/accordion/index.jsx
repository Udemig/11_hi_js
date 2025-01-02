import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div>
        <h3>Unit Test Nedir ?</h3>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Gizle" : "Göster"}
        </button>
      </div>

      <p className={isOpen ? "show" : "hide"}>
        Unit Test, bir yazılımın en küçük test edilebilir bölümlerinin, tek tek
        ve bağımsız olarak doğru çalışması için incelendiği bir yazılım
        geliştirme sürecidir.
      </p>
    </div>
  );
};

export default Accordion;
