import { FC } from "react";
import icon1 from "@/app/assets/images/icon-1.webp";
import icon2 from "@/app/assets/images/icon-2.webp";
import icon3 from "@/app/assets/images/icon-3.webp";
import icon4 from "@/app/assets/images/icon-4.png";
import { InfoItem } from "../types";
import InfoCard from "../components/card/info-card";
import Graphic from "../components/graphic";

const App: FC = () => {
  // ekrana basılcaka olan kartların dizisi
  const cards: InfoItem[] = [
    {
      icon: icon1,
      label: "Toplam Kullanıcı",
      value: 558,
    },
    {
      icon: icon2,
      label: "Toplam Sipariş",
      value: 624,
    },
    {
      icon: icon3,
      label: "Toplam Satış",
      value: 200.216 + "$",
    },
    {
      icon: icon4,
      label: "Ürün Sayısı",
      value: 1143,
    },
  ];

  return (
    <div>
      <h1 className="title">Dashboard</h1>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {cards.map((item, key) => (
          <InfoCard key={key} item={item} />
        ))}
      </section>

      <section>
        <Graphic />
      </section>
    </div>
  );
};

export default App;
