import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const DashboardSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <section className={cn(className)}>{children}</section>;
};
export const DashboardSectionTitle = ({ children }: { children: string }) => {
  return <h1 className="text-xl font-medium text-[#1A181E]">{children}</h1>;
};

export default DashboardSection;
