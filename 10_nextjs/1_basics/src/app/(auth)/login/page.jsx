export const metadata = {
  title: "Giriş Yap",
  description: "Hesabınıza giriş yapın...",
};

// çağrıldığın varsayılan olarak 1sn ardından cevap veren async f.
export const delay = async (ms = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const Login = async () => {
  await delay(2000);
  // throw new Error("Giriş yetkiniz yok..");

  return <div>Login</div>;
};

export default Login;
