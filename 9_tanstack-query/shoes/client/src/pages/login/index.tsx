import { FC, FormEvent } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import useAuth from "../../hooks/useAuth";
import { LoginData } from "../../types";

const Login: FC = () => {
  const { login } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    login.mutate(userData as unknown as LoginData);
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="KICKS" src="/logo.svg" className="mx-auto h-10 w-auto" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Hesabına giriş yap</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Email" name="email" />
            <Input label="Şifre" name="password" type="password" />

            <div>
              <button
                disabled={login.isPending}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Giriş Yap
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Hesabın yok mu?
            <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500 ps-2">
              Kayıt Ol
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
