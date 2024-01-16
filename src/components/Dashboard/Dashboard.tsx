import { ReactNode } from "react";

const Dashboard = ({ children }: { children: ReactNode }) => {
  return <div className="flex bg-[#fafafa] min-w-screen ">{children}</div>;
};

export default Dashboard;
