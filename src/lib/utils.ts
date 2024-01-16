import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { ChildNavItem, NavItem } from "@/types/Menu";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function roleBasedNavFilter(navItems: NavItem[], role: string) {
  return navItems.filter((item) => {
    if (item.roles) {
      return item.roles.includes(role);
    }
    return true;
  });
}
export function roleBasedNavChildFilter(
  navItems: ChildNavItem[],
  role: string
) {
  return navItems.filter((item) => {
    if (item.roles) {
      return item.roles.includes(role);
    }
    return true;
  });
}
