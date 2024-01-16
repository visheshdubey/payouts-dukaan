import { Icons } from "@/components/theme/icons";

const TableSearchBox = () => {
  return (
    <section className="flex justify-between">
      <div
        className="flex w-fit space-x-2 py-2.5 px-4 items-center border border-border rounded"
        role="search"
      >
        <Icons.searchGraySmall />
        <input
          className="bg-white outline-none text-sm font-normal w-44 placeholder:text-[#999]"
          placeholder="Order ID or transaction ID"
          aria-label="Search by Order ID or transaction ID"
        />
      </div>
      <div className="flex items-center space-x-4">
        <span
          className="flex items-center space-x-3 bg-white px-3 py-1.5 border rounded border-border shadow-sm hover:cursor-pointer"
          aria-label="Sort"
        >
          <span className="text-text">Sort</span>
          <Icons.sort />
        </span>
        <div
          className="p-2 border rounded border-border hover:cursor-pointer"
          aria-label="Filter"
        >
          <Icons.filter />
        </div>
      </div>
    </section>
  );
};

export default TableSearchBox;
