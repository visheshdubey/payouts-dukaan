import { ReactNode } from "react";

const TableCard = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="flex flex-col gap-3 px-3 pt-3 pb-2 bg-white rounded-md"
      style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
    >
      {children}
    </div>
  );
};

export default TableCard;
