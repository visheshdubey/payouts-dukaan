import { ReactNode } from "react";

const DashboardMain = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col w-full p-8 space-y-6 ">{children}</main>
  );
};

export default DashboardMain;
