import { Order } from "@/app/types";
import generateImage from "@/app/utils/generateImage";

const OrderCard = ({ order }: { order: Order }) => {
  return (
    <div className="border p-5 rounded-md shadow flex gap-5 md:gap-14 items-center hover:bg-zinc-100/10 transition cursor-pointer hover:shadow-lg">
      <img src={generateImage(order.product)} alt={order.product.model} width={200} height={200} />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 flex-1">
        <h2 className="flex max-xl:flex-col gap-1">
          <span>{order.product.make}</span>
          <span className="font-bold xl:ms-2">{order.product.model}</span>
        </h2>

        <h2 className="flex max-xl:flex-col gap-1">
          <span>Ödenen Tutar</span>
          <span className="font-bold xl:ms-2 text-green-600">{order.money_spend}₺</span>
        </h2>

        <h2 className="flex max-xl:flex-col gap-1">
          <span>Alım Tarighi</span>
          <span className="font-bold xl:ms-2 text-blue-600">{new Date(order.createdAt).toLocaleDateString("tr")}</span>
        </h2>

        <h2 className="flex max-xl:flex-col gap-1">
          <span>Ödeme Tipi</span>
          <span className="font-bold xl:ms-2 text-blue-600">{order.type}</span>
        </h2>
      </div>
    </div>
  );
};

export default OrderCard;
