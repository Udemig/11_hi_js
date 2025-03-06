import OrderCard from "@/app/components/card/order-card";
import { getOrders } from "@/app/utils/service";

const Page = async () => {
  const { orders } = await getOrders();

  return (
    <div className="p-5 md:p-7 lg:px-10 text-black">
      <h1 className="mb-10 text-4xl font-bold">Siparişlerim</h1>

      <div className="grid gap-10">
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Page;
