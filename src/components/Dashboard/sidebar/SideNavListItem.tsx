import React, { useState } from "react";

import { cn, roleBasedNavChildFilter } from "@/lib/utils";
import { NavItem } from "@/types/Menu";

interface SideNavListItemProps {
  item: NavItem;
  role?: string;
}

const SideNavListItem: React.FC<SideNavListItemProps> = ({
  item,
  role = "admin",
}) => {
  const { icon, name, isActive, childrens } = item;
  const activeClasses = isActive
    ? "bg-white/10 rounded hover:bg-white/10 hover:cursor-pointer hover:rounded"
    : "hover:bg-white/10 hover:cursor-pointer hover:rounded";
  const [toggleChildren, setToggleChildren] = useState(false);

  const handleToggleChildren = () => {
    if (childrens) {
      childrens?.length > 0 && setToggleChildren(!toggleChildren);
    }
  };
  return (
    <>
      <li
        className={cn(
          `flex items-center justify-start px-4 py-2 space-x-3 ${activeClasses}`,
          toggleChildren && "bg-white/10 rounded"
        )}
        onClick={handleToggleChildren}
      >
        {icon}
        <h1 className="text-sm font-medium text-white/80">{name}</h1>
      </li>
      <div className="flex flex-col h-fit text-white/80">
        {toggleChildren &&
          childrens &&
          roleBasedNavChildFilter(childrens, role).map((child) => (
            <span
              className={cn(
                "flex items-center justify-between px-4 py-2 ml-8 text-sm",
                "hover:bg-white/10 hover:cursor-pointer hover:rounded",
                child.isActive && "text-white font-medium"
              )}
            >
              {child.name}
              {child.chipContent && (
                <span className="px-2 py-1 text-xs rounded bg-white/10 h-fit ">
                  {child.chipContent}
                </span>
              )}
            </span>
          ))}
      </div>
    </>
  );
};

export default SideNavListItem;
