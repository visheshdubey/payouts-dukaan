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
      <td className="text-[#146EB4] px-0 text-sm leading-5 font-medium">
        <p className="py-3.5 cursor-pointer ml-3">#{id}</p>
      </td>
      <td className="text-[#1A181E] px-0 text-sm leading-5">
        <p className="flex gap-2 items-center py-3.5 ml-3">
          <span
            className={cn(
              "w-2.5 h-2.5 rounded-full",
              status === "Processing" ? "bg-black/40" : "bg-[#17B31B]"
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
