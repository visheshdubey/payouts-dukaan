import '@/globals.css';

import logo from '@/assets/logo.png';

import { Icons } from './components/icons';
import KPICard from './components/KpiCards';
import SideNavListItem from './components/SideNavListItem';
import TableRow from './components/TableRow';

const navItems = [
  { icon: <Icons.home />, name: "Home" },
  { icon: <Icons.order />, name: "Orders" },
  { icon: <Icons.products />, name: "Products" },
  { icon: <Icons.delivery />, name: "Delivery" },
  { icon: <Icons.marketing />, name: "Marketing" },
  { icon: <Icons.analytics />, name: "Analytics" },
  { icon: <Icons.paymentsActive />, name: "Payments", isActive: true },
  { icon: <Icons.tools />, name: "Tools" },
  { icon: <Icons.discounts />, name: "Discounts" },
  { icon: <Icons.audience />, name: "Audience" },
  { icon: <Icons.appearance />, name: "Appearance" },
  { icon: <Icons.plugins />, name: "Plugins" },
];
type TableData = {
  id: string;
  status: "Successful" | "Processing";
  orderId: string;
  date: string;
  amount: string;
};
const tableData: TableData[] = [
  {
    id: "281209",
    status: "Successful",
    orderId: "131634495747",
    date: "Today, 08:45 PM",
    amount: "₹1,125.00",
  },
  {
    id: "281208",
    status: "Processing",
    orderId: "131634495747",
    date: "Yesterday, 3:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: "281207",
    status: "Successful",
    orderId: "131634495747",
    date: "12 Jul 2023, 03:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: "281206",
    status: "Successful",
    orderId: "131634495747",
    date: "12 Jul 2023, 03:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: "281205",
    status: "Successful",
    orderId: "131634495747",
    date: "12 Jul 2023, 03:00 PM",
    amount: "₹1,125.00",
  },
  {
    id: "281204",
    status: "Successful",
    orderId: "131634495747",
    date: "12 Jul 2023, 03:00 PM",
    amount: "₹1,125.00",
  },
];

function App() {
  return (
    <>
      <div className="flex bg-[#fafafa] min-w-screen ">
        <nav
          className="flex flex-col gap-6 min-h-screen max-h-screen min-w-56 bg-[#1E2640] sticky top-0 py-4 px-2.5"
          role="navigation"
        >
          <div className="flex gap-[12px] px-[8.5px] items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-[40px] h-[40px] rounded-[4px] border object-cover overflow-clip"
            />
            <div className="flex flex-col gap-[4px]">
              <h1 className="text-white font-medium text-[15px]">Nishyan</h1>
              <a
                href="#"
                className="text-[13px] leading-4 text-white/80 underline hover:cursor-pointer w-fit"
              >
                Visit store
              </a>
            </div>
            <Icons.chevronDown aria-label="Expand" />
          </div>
          <nav className="flex-1 space-y-1" aria-label="Main">
            {navItems.map((item, index) => (
              <SideNavListItem
                key={index}
                icon={item.icon}
                name={item.name}
                isActive={item.isActive || false}
              />
            ))}
          </nav>
          <section
            className="py-1.5 px-3 bg-white/10 rounded flex items-center space-x-3"
            aria-label="Credits"
          >
            <div className="p-1.5 bg-white/10 rounded h-fit" aria-hidden="true">
              <Icons.wallet aria-label="Wallet" />
            </div>
            <div className="grow">
              <p
                className="text-white/80 text-[13px]"
                aria-label="Available credits label"
              >
                Available credits
              </p>
              <b className="font-medium text-white" aria-label="Credit amount">
                222.10
              </b>
            </div>
          </section>
        </nav>
        <section className="flex flex-col flex-1 w-full">
          <header
            className="sticky top-0 z-50 flex w-full gap-4 px-8 py-3 bg-white border-b border-black/15"
            role="banner"
          >
            <div className="flex items-center flex-1 gap-4 ">
              <h1 className="text-[20px] font-medium text-[#1A181E]">
                Payouts
              </h1>
              <div className="flex items-center gap-2 text-black/70">
                <Icons.help.sm />
                <span
                  className="text-xs hover:underline hover:cursor-pointer"
                  aria-label="Learn how it works"
                >
                  How it works
                </span>
              </div>
            </div>
            <div
              className="flex items-center flex-1 gap-2 px-4 py-[9px] rounded-[6px] bg-black/5"
              role="search"
            >
              <Icons.search aria-hidden="true" />
              <input
                type="text"
                name="search"
                placeholder="Search features, tutorials, etc."
                className="w-full bg-transparent active:border-0 text-[15px] outline-none leading-[22px] placeholder-black/50"
                aria-label="Search"
              />
            </div>
            <div className="flex justify-end flex-1 gap-3">
              <div
                className="p-2.5 bg-black/10 rounded-full hover:cursor-pointer"
                role="button"
                aria-label="View announcements"
              >
                <Icons.announcements />
              </div>
              <Icons.filledDown aria-hidden="true" />
            </div>
          </header>
          <main className="flex flex-col w-full p-8 space-y-6 ">
            <section
              className="flex items-center justify-between w-full"
              aria-label="Overview Section"
            >
              <h1 className="text-xl font-medium text-[#1A181E]">Overview</h1>
              <div
                className="relative bg-white"
                role="combobox"
                aria-label="Select time period"
              >
                <select
                  className="py-1.5 pl-3.5 pr-9 appearance-none hover:cursor-pointer bg-white border border-border rounded-md"
                  aria-label="Select time period"
                >
                  <option>This Month</option>
                  <option>Last Month</option>
                </select>
                <Icons.chevronDownGray aria-hidden="true" />
              </div>
            </section>
            <section className="flex space-x-5 h-[154px] ">
              <KPICard
                title={`Next Payout`}
                amount={`₹2,312.23`}
                description={`23 Orders`}
                isWhite={false}
              />
              <KPICard
                title={`Amount Pending`}
                amount={`₹92,312.20`}
                description={`13 Orders`}
              />
              <KPICard title={`Amount Processed`} amount={`₹23,92,312.19`} />
            </section>
            <section
              className="flex flex-col w-full gap-6"
              aria-label="Transactions Overview"
            >
              <span className="text-xl font-medium text-[#1A181E]">
                Transactions | This Month
              </span>
              <div className="flex gap-3">
                <span className="px-4 py-[6px] text-sm rounded-full font-medium bg-black/10 text-black/50 cursor-pointer">{`Payouts (22)`}</span>
                <span className="px-4 py-[6px] text-sm rounded-full font-medium bg-[#146EB4] text-white cursor-pointer">{`Refunds (6)`}</span>
              </div>
              <div
                className="flex flex-col gap-3 px-3 pt-3 pb-2 bg-white rounded-md"
                style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
              >
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
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F2F2F2] w-full">
                      <th
                        className="py-2.5 px-3 font-medium bg-[#F2F2F2] rounded-l text-sm"
                        scope="col"
                      >
                        Order ID
                      </th>
                      <th
                        className="py-2.5 px-3 font-medium bg-[#F2F2F2] text-sm"
                        scope="col"
                      >
                        Status
                      </th>
                      <th
                        className="py-2.5 px-3 font-medium bg-[#F2F2F2] text-sm"
                        scope="col"
                      >
                        Transaction ID
                      </th>
                      <th
                        className="py-2.5 px-3 font-medium bg-[#F2F2F2] text-sm"
                        scope="col"
                      >
                        Refund date
                      </th>
                      <th
                        className="py-2.5 px-3 font-medium bg-[#F2F2F2] rounded-r text-sm text-right"
                        scope="col"
                      >
                        Order amount
                      </th>
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
              </div>
            </section>
          </main>
        </section>
      </div>
    </>
  );
}

export default App;
