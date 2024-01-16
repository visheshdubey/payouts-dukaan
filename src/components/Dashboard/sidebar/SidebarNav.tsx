import logo from "@/assets/logo.png";
import { roleBasedNavFilter } from "@/lib/utils";
import { NavItem } from "@/types/Menu";

import { Icons } from "../../theme/icons";
import SideNavListItem from "./SideNavListItem";

const SidebarNav = ({
  navItems,
  role = "admin",
}: {
  navItems: NavItem[];
  role?: string;
}) => {
  return (
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
        {roleBasedNavFilter(navItems, role).map((item, index) => (
          <SideNavListItem role={role} key={index} item={item} />
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
  );
};

export default SidebarNav;
