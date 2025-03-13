import { FC } from "react";
import UserTable from "@/app/components/table/user-table";
import UserModal from "@/app/components/modal/user-modal";

interface Props {
  searchParams: Promise<{
    show: string;
  }>;
}

const User: FC<Props> = async ({ searchParams }) => {
  const { show } = await searchParams;

  return (
    <div className="page">
      <h1 className="title">User</h1>

      <UserTable />

      {show && <UserModal userId={show} />}
    </div>
  );
};

export default User;
