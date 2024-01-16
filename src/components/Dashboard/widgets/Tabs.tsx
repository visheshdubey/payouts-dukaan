import { cn } from "@/lib/utils";
import { TabType } from "@/types/Tabs";

const Tabs = ({ data }: { data: TabType[] }) => {
  return (
    <div className="flex gap-3">
      {data.map((item, index) => (
        <span
          key={`tab-item-${index}`}
          className={cn(
            "px-4 py-[6px] text-sm rounded-full font-medium cursor-pointer",
            item.isActive
              ? "bg-[#146EB4] text-white"
              : "bg-black/10 text-black/50"
          )}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
