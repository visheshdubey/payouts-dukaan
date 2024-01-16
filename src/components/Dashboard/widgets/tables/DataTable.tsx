import { TableData } from "@/types/Table";

import TableCard from "./TableCard";
import TableRow from "./TableRow";
import TableSearchBox from "./TableSearchBox";

const DataTable = ({
  tableData,
  columns,
}: {
  tableData: TableData[];
  columns: string[];
}) => {
  return (
    <TableCard>
      <TableSearchBox />
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#F2F2F2] w-full">
            {columns.map((item, index) => (
              <th
                key={`column-header-item-${index}`}
                className="py-2.5 px-3 font-medium bg-[#F2F2F2] rounded-l text-sm"
                scope="col"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <TableRow
              key={item.id}
              id={item.id}
              status={item.status}
              orderId={item.orderId}
              date={item.date}
              amount={item.amount}
              isLast={item === tableData[tableData.length - 1]}
            />
          ))}
        </tbody>
      </table>
    </TableCard>
  );
};

export default DataTable;
