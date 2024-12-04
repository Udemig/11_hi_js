const TextContainer = () => {
  return (
    <div className="flex gap-3 mt-5 md:gap-[105px] max-md:flex-col">
      <div className="flex-1">
        <textarea className="w-full min-h-[300px] max-h-[500px] text-black text-[20px] rounded p-[10px]"></textarea>
      </div>

      <div className="flex-1">
        <textarea
          disabled
          className="w-full min-h-[300px] max-h-[500px] text-[20px] rounded p-[10px] text-gray-300"
        ></textarea>
      </div>
    </div>
  );
};

export default TextContainer;
