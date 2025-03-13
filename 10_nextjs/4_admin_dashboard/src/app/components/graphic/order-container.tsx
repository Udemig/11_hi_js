import { getOrders } from "@/app/utils/service";
import { FC } from "react";
import LineGraph from "./line-grap";

const Graphic: FC = async () => {
  const orders = await getOrders();

  return (
    <div className="mt-10 bg-white rounded-lg p-5">
      <h2 className="font-semibold text-lg">Satış Detayları</h2>

      <LineGraph orders={orders} />
    </div>
  );
};

export default Graphic;
