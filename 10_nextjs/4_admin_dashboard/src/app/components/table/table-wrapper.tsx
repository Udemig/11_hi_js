import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

// HOC
const TableWrapper: FC<Props> = ({ children }) => {
  return (
    <div className="max-sm:w-[80vw] overflow-x-auto">
      <table
        border={4}
        className="border shadow w-full bg-white rounded-md mt-5 z-0 border-zinc-300"
      >
        {children}
      </table>
    </div>
  );
};

export default TableWrapper;
