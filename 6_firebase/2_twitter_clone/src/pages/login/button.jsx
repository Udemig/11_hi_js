const Button = () => {
  return (
    <button className="bg-white flex items-center py-2 px-10 rounded-full text-black hover:bg-gray-300 whitespace-nowrap gap-x-2">
      <img src="g-logo.png" alt="google logo" className="h-[20px]" />
      <span>Google ile Giriş Yap</span>
    </button>
  );
};

export default Button;
