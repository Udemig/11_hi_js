import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Oturum açıldı");
        navigate("/feed");
      })
      .catch((err) => {
        toast.error("Hata!: " + err.code);
      });
  };

  return (
    <button
      className="bg-white flex items-center py-2 px-10 rounded-full text-black hover:bg-gray-300 whitespace-nowrap gap-x-2"
      onClick={handleLogin}
    >
      <img src="g-logo.png" alt="google logo" className="h-[20px]" />
      <span>Google ile Giriş Yap</span>
    </button>
  );
};

export default Button;
