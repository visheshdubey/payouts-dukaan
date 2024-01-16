import { ReactNode } from "react";

const DashboardContent = ({ children }: { children: ReactNode }) => {
  return <section className="flex flex-col flex-1 w-full">{children}</section>;
};

export default DashboardContent;
