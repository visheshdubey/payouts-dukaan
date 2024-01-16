import { Icons } from "@/components/theme/icons";
import { NavItem } from "@/types/Menu";

export const navItems: NavItem[] = [
  { icon: <Icons.home />, name: "Home" },
  {
    icon: <Icons.order />,
    name: "Orders",
    roles: ["admin", "manager"],
    childrens: [
      { name: "All orders", isActive: true, chipContent: "1.6K" },
      { name: "Returns" },
      { name: "Abandoned", chipContent: "125", roles: ["admin"] },
    ],
  },
  { icon: <Icons.products />, name: "Products" },
  { icon: <Icons.delivery />, name: "Delivery" },
  { icon: <Icons.marketing />, name: "Marketing" },
  { icon: <Icons.analytics />, name: "Analytics" },
  { icon: <Icons.paymentsActive />, name: "Payments", isActive: true },
  { icon: <Icons.discounts />, name: "Discounts" },
  { icon: <Icons.audience />, name: "Audience" },
  { icon: <Icons.appearance />, name: "Appearance" },
  { icon: <Icons.plugins />, name: "Plugins" },
];
