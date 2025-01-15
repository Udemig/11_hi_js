const TrendButton = () => {
  return (
    <div className="flex justify-end">
      <button className="bg-white rounded-full px-4 py-1 pr-14 flex items-center gap-2 text-[20px] lg:text-[24px] font-semibold text-black relative hover:bg-gray-200 transition shadow-lg shadow-gray-300/50 ">
        Trendler
        <img
          src="/fire.png"
          alt="cart"
          className="size-[45px] absolute right-1 bottom-1"
        />
      </button>
    </div>
  );
};

export default TrendButton;
