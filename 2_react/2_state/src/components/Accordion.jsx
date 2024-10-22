import { useState } from "react";

const Accordion = ({ title, desc }) => {
  // () initialState
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white text-black rounded-3 p-4 acc">
      <div className="d-flex justify-content-between align-items-center">
        <h2>{title}</h2>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`btn btn-dark ${isOpen && "up"}`}
        >
          {">"}
        </button>
      </div>

      {/* ternary & and */}
      {isOpen && <p className="mt-4 lead">{desc}</p>}
    </div>
  );
};

export default Accordion;
