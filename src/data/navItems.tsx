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
  { icon: <Icons.products />, name: "Products", roles: ["admin", "manager"] },
  { icon: <Icons.delivery />, name: "Delivery", roles: ["admin", "manager"] },
  { icon: <Icons.marketing />, name: "Marketing", roles: ["admin"] },
  { icon: <Icons.analytics />, name: "Analytics" },
  { icon: <Icons.paymentsActive />, name: "Payments", isActive: true },
  { icon: <Icons.discounts />, name: "Discounts" },
  { icon: <Icons.audience />, name: "Audience", roles: ["admin", "manager"] },
  { icon: <Icons.appearance />, name: "Appearance" },
  { icon: <Icons.plugins />, name: "Plugins", roles: ["admin", "staff"] },
];
