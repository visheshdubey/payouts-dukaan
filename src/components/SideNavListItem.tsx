import React from "react";

interface SideNavListItemProps {
  icon: JSX.Element;
  name: string;
  isActive: boolean;
}

const SideNavListItem: React.FC<SideNavListItemProps> = ({
  icon,
  name,
  isActive,
}) => {
  const activeClasses = isActive
    ? "bg-white/10 rounded hover:bg-white/10 hover:cursor-pointer hover:rounded"
    : "hover:bg-white/10 hover:cursor-pointer hover:rounded";

  return (
    <li
      className={`flex items-center justify-start px-4 py-2 space-x-3 ${activeClasses}`}
    >
      {icon}
      <h1 className="text-sm font-medium text-white/80">{name}</h1>
    </li>
  );
};

export default SideNavListItem;
