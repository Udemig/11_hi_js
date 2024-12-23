import Button from "./button";
import Form from "./form";

const Login = () => {
  return (
    <div className="h-screen bg-[#242424] text-white grid place-items-center px-4">
      <div className="bg-black py-16 px-28 rounded-lg flex flex-col gap-10 ">
        <div className="flex justify-center">
          <img src="x-logo.webp" alt="x logo" className="h-[60px]" />
        </div>

        <h1 className="text-lg font-bold text-center">Twitter'a Giriş Yap</h1>

        <Button />

        <Form />
      </div>
    </div>
  );
};

export default Login;
