import React from "react";

import { cn } from "@/lib/utils";

interface TableRowProps {
  id: string;
  status: "Successful" | "Processing";
  orderId: string;
  date: string;
  amount: string;
  isLast: boolean;
}

const TableRow: React.FC<TableRowProps> = ({
  id,
  status,
  orderId,
  date,
  amount,
  isLast,
}) => {
  return (
    <tr className={cn(!isLast && "border-b border-b-[#E6E6E6]")}>
      <td className="px-0 text-sm font-medium leading-5 text-primary-theme">
        <p className="py-3.5 cursor-pointer ml-3">#{id}</p>
      </td>
      <td className="px-0 text-sm leading-5 text-foreground-theme">
        <p className="flex gap-2 items-center py-3.5 ml-3">
          <span
            className={cn(
              "w-2.5 h-2.5 rounded-full",
              status === "Processing" ? "bg-black/40" : "bg-success"
            )}
          ></span>
          {status}
        </p>
      </td>
      <td className="text-[#4d4d4d] px-0 text-sm leading-5">
        <p className="py-3.5 ml-3">{orderId}</p>
      </td>
      <td className="text-[#4d4d4d] px-0 text-sm leading-5">
        <p className="py-3.5 ml-3">{date}</p>
      </td>
      <td className="text-[#4d4d4d] px-0 text-sm leading-5 text-right">
        <p className="py-3.5 ml-3">{amount}</p>
      </td>
    </tr>
  );
};

export default TableRow;
