import OrderTable from "@/app/components/table/order-table";
import { FC } from "react";

const Orderrs: FC = () => {
  return (
    <div className="page">
      <h1 className="title">Orders</h1>

      <OrderTable />
    </div>
  );
};

export default Orderrs;
