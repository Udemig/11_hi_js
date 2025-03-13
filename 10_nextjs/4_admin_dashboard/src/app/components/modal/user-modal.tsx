import { getUser } from "@/app/utils/service";
import Link from "next/link";
import { FC } from "react";
import { MdClose } from "react-icons/md";

interface Props {
  userId: string;
}

const UserModal: FC<Props> = async ({ userId }) => {
  const user = await getUser(userId);

  // ekrana basılcak olan değerlerden bir dizi oluştur
  const fields = [
    {
      label: "Email",
      value: user.email,
    },
    {
      label: "Telefon",
      value: user.phone,
    },
    {
      label: "Ülke",
      value: user.address.country,
    },
    {
      label: "Şehir",
      value: user.address.city,
    },
    {
      label: "Adres",
      value: user.address.street,
    },
    {
      label: "Posta Kodu",
      value: user.address.postal_code,
    },
    {
      label: "Sipariş Sayısı",
      value: user.orders.length,
    },
  ];

  return (
    <div className="fixed bg-black/10 inset-0 z-[9999] backdrop-blur-[2px] grid place-items-center">
      <div className="bg-white rounded-lg shadow py-6 px-10 pb-14">
        <div className="flex justify-end">
          <Link
            href="/users"
            className="shadow p-2 rounded-lg hover:shadow-lg hover:bg-gray-200 transition"
          >
            <MdClose />
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold text-center my-5">
            {user.name}
          </h1>

          {fields.map((field, key) => (
            <div
              key={key}
              className="flex justify-between gap-20 md:gap-30 lg:gap-40"
            >
              <span>{field.label}</span>
              <span className="font-semibold">{field.value}</span>
            </div>
          ))}

          <hr />
          <div>
            <div className="grid grid-cols-3 ">
              <span className="text-center">Ürün İd</span>
              <span className="text-center">Adet</span>
              <span className="text-center">Toplam Fiyat</span>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              {user.orders.map((order, key) => (
                <div
                  key={key}
                  className="bg-gray-200 p-2 rounded-lg grid grid-cols-3 font-semibold"
                >
                  <span className="text-center">{order.product_id}</span>
                  <span className="text-center">{order.quantity}</span>
                  <span className="text-center">
                    ${Number(order.total_price).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
