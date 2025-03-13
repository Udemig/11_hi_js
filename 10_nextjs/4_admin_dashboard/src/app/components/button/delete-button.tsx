"use client";

import { deleteUser } from "@/app/utils/service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface Props {
  userId: string;
}

const DeleteButton: FC<Props> = ({ userId }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    if (!confirm("Bu kullanıcı hesabını silmek istediğinize emin misiniz?"))
      return;

    setIsLoading(true);

    deleteUser(userId)
      .then(() => {
        toast.success("Kullanıcı hesabı kaldırıldı");

        // Sayfayı yenile: api'dan silinene kullanıcının arayüzden kaldırılması için
        router.refresh();
      })
      .catch(() => {
        toast.error("Bir hata oluştu");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleDelete}
      className="button hover:bg-red-200 text-red-500 disabled:opacity-50"
    >
      <FaTrash />
    </button>
  );
};

export default DeleteButton;
