import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import { db } from "../../firebase/index";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import uploadToStorage from "../../firebase/uploadToStorage";
import Loader from "../loader";
import React from "react";

const Form = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  // yeni resim seçildiğinde seçen önizlemesini göstermek için local url'e çevir ve state'e aktar
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  // çarpıya basıldığında ekrandaki resmi kaldır ve inputu temizle
  const clearImage = () => {
    setImage(null);
    fileInputRef.current.value = null;
    fileInputRef.current.files = null;
  };

  // form gönderildiğinde
  const handlesubmit = async (e) => {
    e.preventDefault();

    // inputlardaki verilere eriş
    const text = e.target.text.value.trim();
    const file = e.target.image.files[0];

    // yazı ve resim içeriği yoksa hata gönder
    if (!text && !file)
      return toast.warning("Lütfen gönderi içeriğini belirleyiniz");

    try {
      // yüklenme başlayınca isLoadingi güncelle
      setIsLoading(true);

      // resmi firebase storage'a yükle
      const imageUrl = await uploadToStorage(file);

      // kolleksiyonun referansını al
      const tweetsCol = collection(db, "tweets");

      // kolleksiyona yeni tweet belgesi oluştur
      await addDoc(tweetsCol, {
        content: {
          text,
          image: imageUrl,
        },
        isEdited: false,
        likes: [],
        user: {
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        },
        createdAt: serverTimestamp(),
      });

      // inputları temizle
      e.target.reset();
      setImage(null);
    } catch (error) {
      console.log(error);
    }

    // yüklenme bittiğinde isLoadingi güncelle
    setIsLoading(false);
  };

  return (
    <div className="border-b border-fourth p-4 flex gap-3">
      <img
        src={user.photoURL}
        className="size-[35px] md:size-[45px] rounded-full "
      />

      <form className="w-full pt-1" onSubmit={handlesubmit}>
        <textarea
          type="text"
          name="text"
          className="w-full bg-transparent mb-2 md:text-lg text-gray-300 outline-none resize-y min-h-[40px] max-h-[300px]"
          placeholder="Neler Oluyor?"
        />

        {image && (
          <div className="relative mb-3">
            <button
              type="button"
              className="absolute top-3 end-3 p-3 bg-primary/90 rounded-full transition hover:bg-zinc-800"
              onClick={clearImage}
            >
              <IoMdClose />
            </button>

            <img src={image} />
          </div>
        )}

        <div className="flex justify-between">
          <div className="text-third text-xl flex gap-4">
            <label className="form-icon" htmlFor="image">
              <input
                id="image"
                type="file"
                name="image"
                className="hidden"
                ref={fileInputRef}
                onChange={onImageChange}
              />
              <CiImageOn />
            </label>

            <button className="form-icon" type="button">
              <MdOutlineGifBox />
            </button>
            <button className="form-icon" type="button">
              <FaRegSmile className="text-lg" />
            </button>
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="bg-secondary font-bold px-5 py-[6px] rounded-full text-primary tracking-wide hover:brightness-90 min-w-[100px]"
          >
            {isLoading ? <Loader /> : "Gönder"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Form);
