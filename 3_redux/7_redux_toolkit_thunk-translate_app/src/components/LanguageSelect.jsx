import Select from "react-select";

const LanguageSelect = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="flex gap-2 text-black">
      <Select options={options} className="flex-1" />

      <button className="bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition rounded text-white">
        Değiş
      </button>

      <Select options={options} className="flex-1" />
    </div>
  );
};

export default LanguageSelect;
