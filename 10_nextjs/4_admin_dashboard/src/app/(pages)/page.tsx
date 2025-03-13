import { FC } from "react";
import icon1 from "@/app/assets/images/icon-1.webp";
import icon2 from "@/app/assets/images/icon-2.webp";
import icon3 from "@/app/assets/images/icon-3.webp";
import icon4 from "@/app/assets/images/icon-4.png";
import { InfoItem } from "../types";
import InfoCard from "../components/card/info-card";
import OrderContainer from "../components/graphic/order-container";
import CategoryContainer from "../components/graphic/category-container";
import { getValues } from "../utils/service";

const App: FC = async () => {
  const values = await getValues();

  // ekrana basılcaka olan kartların dizisi
  const cards: InfoItem[] = [
    {
      icon: icon1,
      label: "Toplam Kullanıcı",
      value: values.total_users * 197,
    },
    {
      icon: icon2,
      label: "Toplam Sipariş",
      value: values.total_orders * 197,
    },
    {
      icon: icon3,
      label: "Toplam Satış",
      value: (values.total_price * 197).toLocaleString() + "$",
    },
    {
      icon: icon4,
      label: "Ürün Sayısı",
      value: values.total_products * 197,
    },
  ];

  return (
    <div className="page">
      <h1 className="title">Admin Paneli</h1>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {cards.map((item, key) => (
          <InfoCard key={key} item={item} />
        ))}
      </section>

      <section className="grid lg:grid-cols-3 gap-5 mt-5">
        <div className="lg:col-span-2">
          <OrderContainer />
        </div>

        <div className="lg:col-span-1">
          <CategoryContainer />
        </div>
      </section>
    </div>
  );
};

export default App;
